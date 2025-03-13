import { render, screen, waitFor, within } from "@testing-library/react";
import ProjectsList from "../ProjectsList";
import { setupLightMode, resetModes, mockProjects } from "./test-utils/testUtils";

describe("ProjectsList component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useTheme");

      global.fetch = vi.fn().mockResolvedValue({
         ok: true,
         json: async () => mockProjects,
      });
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render ProjectsList element", () => {
      render(<ProjectsList />);
      const projectsList = screen.getByRole("main");
      expect(projectsList).toBeInTheDocument();
   });

   test("should render ProjectsList container div element", () => {
      render(<ProjectsList />);
      const projectsListContainer = screen.getByLabelText("Projects list container");
      expect(projectsListContainer).toBeInTheDocument();
   });

   test("should render ProjectsList ul element", () => {
      render(<ProjectsList />);
      const projectsListUl = screen.getByRole("list");
      expect(projectsListUl).toHaveAttribute("class", "p-5 flex flex-col gap-10 projects-list__list");
      expect(projectsListUl).toBeInTheDocument();
   });

   test("should render ProjectsList li elements", async () => {
      render(<ProjectsList />);
      const projectsListLi = await waitFor(() => screen.getAllByRole("listitem"));
      expect(projectsListLi).toHaveLength(6);
      expect(projectsListLi[0]).toBeInTheDocument();
   });

   test("should render the project details container", async () => {
      render(<ProjectsList />);
      const projectListLi = await waitFor(() => screen.getAllByRole("listitem"));
      const firstProject = projectListLi[0];
      const projectDetails = within(firstProject).getByLabelText(`Project ${mockProjects[0].project_name} details`);
      expect(projectDetails).toBeInTheDocument();
   });

   test("should render the project logo image", async () => {
      render(<ProjectsList />);
      const projectListLi = await waitFor(() => screen.getAllByRole("listitem"));
      const firstProject = projectListLi[0];
      const projectLogoImage = within(firstProject).getByAltText("Project logo");
      expect(projectLogoImage).toBeInTheDocument();
   });

   test("should render the project details elements", async () => {
      render(<ProjectsList />);
      const projectListLi = await waitFor(() => screen.getAllByRole("listitem"));
      const firstProject = projectListLi[0];
      const projectDetails = within(firstProject).getByLabelText(`Project ${mockProjects[0].project_name} details`);
      const projectTextBlock = within(projectDetails).getByLabelText(`Project ${mockProjects[0].project_name} text container`);
      expect(within(projectTextBlock).getByText(mockProjects[0].project_description)).toBeInTheDocument();
      expect(within(projectTextBlock).getByText(mockProjects[0].project_technologies)).toBeInTheDocument();
      const projectH2Element = within(projectTextBlock).getByRole("heading", { level: 2 });
      expect(projectH2Element).toBeInTheDocument();
   });

   test("should render the project showcase container", async () => {
      render(<ProjectsList />);
      const projectListLi = await waitFor(() => screen.getAllByRole("listitem"));
      const firstProject = projectListLi[0];
      const projectShowcase = within(firstProject).getByLabelText(`Project ${mockProjects[0].project_name} showcase`);
      expect(projectShowcase).toBeInTheDocument();
   });

   test("should render the project showcase container image element", async () => {
      render(<ProjectsList />);
      const projectListLi = await waitFor(() => screen.getAllByRole("listitem"));
      const firstProject = projectListLi[0];
      const projectShowcaseImage = within(firstProject).getByAltText("Project showcase image");
      expect(projectShowcaseImage).toBeInTheDocument();
   });
});
