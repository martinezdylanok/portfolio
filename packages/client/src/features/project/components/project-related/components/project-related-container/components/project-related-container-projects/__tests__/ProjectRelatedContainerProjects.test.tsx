import { act, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProjectRelatedContainerProjects from "../ProjectRelatedContainerProjects";
import { firstNamesExpected, mockProjects, resetModes, secondNamesExpected, setupLightMode } from "./test-utils/testUtils";

describe("ProjectRelatedContainerProjects tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
      vi.useFakeTimers();
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
      vi.useRealTimers();
   });

   test("renders ProjectRelatedContainerProjects element", () => {
      render(<ProjectRelatedContainerProjects />);
      const relatedContainerProjects = screen.getByLabelText("Related projects container projects");
      expect(relatedContainerProjects).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects list element", () => {
      render(<ProjectRelatedContainerProjects />);
      const relatedContainerProjectsList = screen.getByTestId("related-projects-list");
      expect(relatedContainerProjectsList).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects list items", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects }),
            });
         });
      });

      await act(async () => {
         render(
            <MemoryRouter>
               <ProjectRelatedContainerProjects />
            </MemoryRouter>,
         );
         await vi.runAllTimersAsync();
      });

      const relatedContainerProjectsList = screen.getByTestId("related-projects-list");
      const relatedContainerProjectsListItems = within(relatedContainerProjectsList).getAllByRole("link");
      expect(relatedContainerProjectsListItems.length).toBe(2);
      relatedContainerProjectsListItems.forEach((item) => {
         expect(item).toBeInTheDocument();
      });
   });

   test("renders ProjectRelatedContainerProjects list items with the correct href attributes", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects }),
            });
         });
      });

      await act(async () => {
         render(
            <MemoryRouter>
               <ProjectRelatedContainerProjects />
            </MemoryRouter>,
         );
         await vi.runAllTimersAsync();
      });

      const relatedContainerProjectsList = screen.getByTestId("related-projects-list");
      const relatedContainerProjectsListItems = within(relatedContainerProjectsList).getAllByRole("link");
      expect(relatedContainerProjectsListItems.length).toBe(2);
      relatedContainerProjectsListItems.forEach((item, index) => {
         expect(item).toHaveAttribute("href", `/projects/${mockProjects[index].project_name}`);
         expect(item).toBeInTheDocument();
      });
   });

   test("renders ProjectRelatedContainerProjects project element", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects }),
            });
         });
      });

      await act(async () => {
         render(
            <MemoryRouter>
               <ProjectRelatedContainerProjects />
            </MemoryRouter>,
         );
         await vi.runAllTimersAsync();
      });

      const relatedContainerProjectsList = screen.getByTestId("related-projects-list");
      const relatedContainerProjectsListItems = within(relatedContainerProjectsList).getAllByTestId("related-project");
      expect(relatedContainerProjectsListItems.length).toBe(2);
      relatedContainerProjectsListItems.forEach((item) => {
         expect(item).toBeInTheDocument();
      });
   });

   test("renders ProjectRelatedContainerProjects image element", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects }),
            });
         });
      });

      await act(async () => {
         render(
            <MemoryRouter>
               <ProjectRelatedContainerProjects />
            </MemoryRouter>,
         );
         await vi.runAllTimersAsync();
      });

      const relatedContainerProjectsList = screen.getByTestId("related-projects-list");
      const relatedContainerProjectsImages = within(relatedContainerProjectsList).getAllByAltText("Project image");
      relatedContainerProjectsImages.forEach((image) => {
         expect(image).toBeInTheDocument();
      });
   });

   test("renders ProjectRelatedContainerProjects first name element", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects }),
            });
         });
      });

      await act(async () => {
         render(
            <MemoryRouter>
               <ProjectRelatedContainerProjects />
            </MemoryRouter>,
         );
         await vi.runAllTimersAsync();
      });

      const relatedContainerProjectsLowerPart = screen.getAllByTestId("related-project-lower-part");
      relatedContainerProjectsLowerPart.forEach((part) => {
         const found = firstNamesExpected.some((name) => within(part).queryByRole("heading", { level: 3, name }));
         expect(found).toBe(true);
      });
   });

   test("renders ProjectRelatedContainerProjects second name element", async () => {
      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects }),
            });
         });
      });

      await act(async () => {
         render(
            <MemoryRouter>
               <ProjectRelatedContainerProjects />
            </MemoryRouter>,
         );
         await vi.runAllTimersAsync();
      });

      const relatedContainerProjectsLowerPart = screen.getAllByTestId("related-project-lower-part");
      relatedContainerProjectsLowerPart.forEach((part, index) => {
         const span = within(part).queryByTestId("project-second-part-name");
         expect(span).toHaveTextContent(secondNamesExpected[index]);
      });
   });
});
