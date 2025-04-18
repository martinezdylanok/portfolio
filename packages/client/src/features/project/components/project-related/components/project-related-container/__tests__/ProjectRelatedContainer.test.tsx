import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import ProjectRelatedContainer from "../ProjectRelatedContainer";
import { resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectRelatedContainer tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectRelatedContainer element", () => {
      render(
         <MemoryRouter>
            <ProjectRelatedContainer />
         </MemoryRouter>,
      );
      const relatedContainerElement = screen.getByLabelText("Related projects container");
      expect(relatedContainerElement).toBeInTheDocument();
   });
});
