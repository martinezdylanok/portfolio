import { render, screen } from "@testing-library/react";
import ProjectOverviewDuration from "../ProjectOverviewDuration";

describe("ProjectOverviewDuration tests", () => {
   test("renders ProjectOverviewDuration element", () => {
      render(<ProjectOverviewDuration />);
      const element = screen.getByLabelText("Project overview duration");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectOverviewDuration subtitle", () => {
      render(<ProjectOverviewDuration />);
      const subtitle = screen.getByRole("heading", { name: "Duration" });
      expect(subtitle).toBeInTheDocument();
   });

   test("renders ProjectOverviewDuration value", () => {
      render(<ProjectOverviewDuration />);
      const value = screen.getByRole("paragraph");
      expect(value).toBeInTheDocument();
   });
});
