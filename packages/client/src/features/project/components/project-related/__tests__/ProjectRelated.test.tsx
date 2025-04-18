import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProjectRelated from "../ProjectRelated";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectRelated component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectRelated container element", () => {
      render(
         <MemoryRouter>
            <ProjectRelated />;
         </MemoryRouter>,
      );

      const relatedElement = screen.getByLabelText("Related projects");
      expect(relatedElement).toBeInTheDocument();
   });
});
