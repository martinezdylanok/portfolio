import { render, screen, within } from "@testing-library/react";
import React from "react";
import ProjectRelatedContainerProjectsProject from "../ProjectRelatedContainerProjectsProject";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

vi.mock("react-router", () => {
   const actual = vi.importActual("react-router") as object;
   return {
      ...actual,
      Link: vi.fn(({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => (
         <a href={to} {...props}>
            {children}
         </a>
      )),
      useParams: vi.fn(),
   };
});

describe("ProjectRelatedContainerProjects tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
      global.fetch = vi.fn(async () => {
         return Promise.resolve({
            ok: true,
            status: 200,
            json: async () => ({ success: true, data: {} }),
         });
      }) as vi.Mock;
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectRelatedContainerProjectsProject element", async () => {
      const mockProjectItem = mockProjects[0];
      const projectItemFirstPart = mockProjectItem.project_name.slice(0, 8);
      const projectItemSecondPart = mockProjectItem.project_name.slice(8, 9);

      render(<ProjectRelatedContainerProjectsProject project={mockProjectItem} firstPart={projectItemFirstPart} secondPart={projectItemSecondPart} />);

      const listItem = screen.getByRole("listitem");
      expect(listItem).toBeInTheDocument();
      expect(listItem).toHaveClass("project__related-project");
      expect(listItem).toHaveAttribute("data-testid", "related-project");
   });

   test("renders ProjectRelatedContainerProjectsProject list items with the correct href attributes", async () => {
      const mockProjectItem = mockProjects[0];
      const projectItemFirstPart = mockProjectItem.project_name.slice(0, 8);
      const projectItemSecondPart = mockProjectItem.project_name.slice(8, 9);

      render(<ProjectRelatedContainerProjectsProject project={mockProjectItem} firstPart={projectItemFirstPart} secondPart={projectItemSecondPart} />);

      const listItem = screen.getByRole("listitem");
      const linkElement = within(listItem).getByRole("link");

      expect(linkElement).toHaveAttribute("href", `/projects/${mockProjectItem.project_name}`);
      expect(linkElement).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjectsProject image element", async () => {
      const mockProjectItem = mockProjects[0];
      const projectItemFirstPart = mockProjectItem.project_name.slice(0, 8);
      const projectItemSecondPart = mockProjectItem.project_name.slice(8, 9);

      render(<ProjectRelatedContainerProjectsProject project={mockProjectItem} firstPart={projectItemFirstPart} secondPart={projectItemSecondPart} />);

      const listItem = screen.getByRole("listitem");
      const imageElement = within(listItem).getByRole("img");

      expect(imageElement).toHaveAttribute("alt", "Project image");
      expect(imageElement).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjectsProject first name element", async () => {
      const mockProjectItem = mockProjects[0];
      const projectItemFirstPart = mockProjectItem.project_name.slice(0, 8);
      const projectItemSecondPart = mockProjectItem.project_name.slice(8, 9);

      render(<ProjectRelatedContainerProjectsProject project={mockProjectItem} firstPart={projectItemFirstPart} secondPart={projectItemSecondPart} />);

      const listItem = screen.getByRole("listitem");

      const relatedContainerProjectsLowerPart = within(listItem).getByTestId("related-project-lower-part");
      const firstNameElement = within(relatedContainerProjectsLowerPart).getByText(projectItemFirstPart.trim());
      expect(firstNameElement).toHaveRole("heading");
      expect(firstNameElement).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjectsProject second name element", async () => {
      const mockProjectItem = mockProjects[0];
      const projectItemFirstPart = mockProjectItem.project_name.slice(0, 8);
      const projectItemSecondPart = mockProjectItem.project_name.slice(8, 9);

      render(<ProjectRelatedContainerProjectsProject project={mockProjectItem} firstPart={projectItemFirstPart} secondPart={projectItemSecondPart} />);

      const listItem = screen.getByRole("listitem");

      const relatedContainerProjectsLowerPart = within(listItem).getByTestId("related-project-lower-part");
      const firstNameElement = within(relatedContainerProjectsLowerPart).getByText(projectItemSecondPart);
      expect(firstNameElement).toHaveAttribute("data-testid", "project-second-part-name");
      expect(firstNameElement).toBeInTheDocument();
   });
});
