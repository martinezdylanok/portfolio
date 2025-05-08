import { render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { themeContext } from "../../../../utils/themeContext/themeContext";
import ProjectsListProject from "../ProjectsListProject";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectsList component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../utils/hooks/useTheme.tsx");
      global.fetch = vi.fn();
   });

   beforeEach(() => {
      (global.fetch as vi.Mock).mockReset();
      setupLightMode();
   });

   afterAll(() => {
      vi.restoreAllMocks();
      resetModes();
   });

   test("should render ProjectsList li elements", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      const projectsListLi = await waitFor(() => screen.getAllByRole("listitem"));

      expect(projectsListLi).toHaveLength(mockProjects.length);

      projectsListLi.forEach((listItem, index) => {
         expect(listItem).toHaveAttribute("aria-label", `Project list item: ${mockProjects[index].project_name}`);
      });
   });

   test("should render ProjectsList link elements", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project) => {
         const linkElement = screen.getByLabelText(`View ${project.project_name}`);
         expect(linkElement).toBeInTheDocument();
      });
   });

   test("should render ProjectsList details container", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project) => {
         const divElement = screen.getByLabelText(`Project ${project.project_name} details`);
         expect(divElement).toBeInTheDocument();
      });
   });

   test("should render the project details container with the correct order given the isOdd prop", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project, index) => {
         const divElement = screen.getByLabelText(`Project ${project.project_name} details`);
         expect(divElement).toBeInTheDocument();

         const isOdd = index % 2 !== 0;
         if (isOdd) {
            expect(divElement).toHaveClass("order-2");
         } else {
            expect(divElement).toHaveClass("order-1");
         }
      });
   });

   test("should render the project logo image with the correct order given the isOdd prop", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project, index) => {
         const imageElement = screen.getByAltText(`Project logo for ${project.project_name}`);
         expect(imageElement).toBeInTheDocument();

         const isOdd = index % 2 !== 0;
         if (isOdd) {
            expect(imageElement).toHaveClass("self-end");
         } else {
            expect(imageElement).toHaveClass("self-start");
         }
      });
   });

   test("should render the project text container", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project) => {
         const textContainer = screen.getByLabelText(`Project ${project.project_name} text container`);
         expect(textContainer).toBeInTheDocument();
      });
   });

   test("should render the project text container content", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project) => {
         const textContainer = screen.getByLabelText(`Project ${project.project_name} text container`);
         expect(textContainer).toBeInTheDocument();

         const projectDescription = within(textContainer).getByText(`${project.project_description}`);
         const projectName = within(textContainer).getByText(`${project.project_name.toLocaleUpperCase()}`);
         const proejctTechnologies = within(textContainer).getByText(`${project.project_technologies}`);

         const textContainerContent = [projectDescription, projectName, proejctTechnologies];
         textContainerContent.forEach((element) => {
            expect(element).toBeInTheDocument();
         });
      });
   });

   test.only("should render the project showcase container", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project) => {
         const showcaseElement = screen.getByLabelText(`Project ${project.project_name} showcase`);
         expect(showcaseElement).toBeInTheDocument();
      });
   });

   test("should render the project showcase container with the correct order and justify given the isOdd prop", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project, index) => {
         const showcaseElement = screen.getByLabelText(`Project ${project.project_name} showcase`);
         expect(showcaseElement).toBeInTheDocument();

         const isOdd = index % 2 !== 0;
         if (isOdd) {
            expect(showcaseElement).toHaveClass("justify-start order-1");
         } else {
            expect(showcaseElement).toHaveClass("justify-end order-2");
         }
      });
   });

   test.only("should render the project showcase container image element", async () => {
      render(
         <MemoryRouter>
            <themeContext.Provider value={{ mode: "light", toggleMode: vi.fn() }}>
               {mockProjects.map((project, index) => (
                  <ProjectsListProject key={project.project_name} project={project} isOddProject={index % 2 !== 0} />
               ))}
            </themeContext.Provider>
         </MemoryRouter>,
      );

      mockProjects.forEach((project) => {
         const showcaseImage = screen.getByAltText(`Project showcase image for ${project.project_name}`);
         expect(showcaseImage).toBeInTheDocument();
      });
   });
});
