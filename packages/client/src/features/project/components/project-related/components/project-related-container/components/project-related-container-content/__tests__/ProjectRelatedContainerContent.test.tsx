import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProjectRelatedContainerContent from "../ProjectRelatedContainerContent";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectRelatedContainerContent tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectRelatedContainerContent element", () => {
      render(
         <MemoryRouter>
            <ProjectRelatedContainerContent />
         </MemoryRouter>,
      );
      const relatedContainerContent = screen.getByLabelText("Related projects container content");
      expect(relatedContainerContent).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerContent title", () => {
      render(
         <MemoryRouter>
            <ProjectRelatedContainerContent />
         </MemoryRouter>,
      );
      const relatedContainerContentTitle = screen.getByRole("heading");
      expect(relatedContainerContentTitle).toHaveTextContent("OTHER ADVENTURES");
      expect(relatedContainerContentTitle).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerContent link", () => {
      render(
         <MemoryRouter>
            <ProjectRelatedContainerContent />
         </MemoryRouter>,
      );
      expect(screen.getByLabelText("See all projects")).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerContent subtitle", () => {
      render(
         <MemoryRouter>
            <ProjectRelatedContainerContent />
         </MemoryRouter>,
      );
      const relatedContainerContentLink = screen.getByLabelText("See all projects");
      const relatedContainerContentSubtitle = screen.getByText("See all projects");
      expect(relatedContainerContentLink).toContainElement(relatedContainerContentSubtitle);
   });

   test("renders ProjectRelatedContainerContent subtitle underline with aria-hidden property", () => {
      render(
         <MemoryRouter>
            <ProjectRelatedContainerContent />
         </MemoryRouter>,
      );

      const relatedContainerContentSubtitle = screen.getByText("See all projects");
      const relatedContainerContentUnderline = relatedContainerContentSubtitle.querySelector('span[aria-hidden="true"]') as HTMLElement | null;
      expect(relatedContainerContentSubtitle).toContainElement(relatedContainerContentUnderline);
   });
});
