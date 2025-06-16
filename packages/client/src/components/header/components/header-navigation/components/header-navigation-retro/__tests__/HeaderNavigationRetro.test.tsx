import { act, fireEvent, render, screen } from "@testing-library/react";
import HeaderNavigationRetro from "../HeaderNavigationRetro";
import { FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT, SPAN_TEXT, WRAPPER_ARIA_LABEL_TEXT } from "../data/headerNavigatonRetroData";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/test-utils";

vi.mock("react-router", () => ({
   ...vi.importActual("react-router"),
   Link: vi.fn(),
   useParams: vi.fn(),
}));

describe("HeaderNavigationRetro Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
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

   test("shoudl render HeaderNavigationRetro wrapper element with the correct role", () => {
      render(<HeaderNavigationRetro />);
      const wrapperElement = screen.getByLabelText(WRAPPER_ARIA_LABEL_TEXT);
      expect(wrapperElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro span element with the correct text", () => {
      render(<HeaderNavigationRetro />);
      const spanElement = screen.getByText(SPAN_TEXT);
      expect(spanElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro form element with the correct aria-label", () => {
      render(<HeaderNavigationRetro />);
      const formElement = screen.getByLabelText(FORM_ARIA_LABEL_TEXT);
      expect(formElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro input element with the correct text", () => {
      render(<HeaderNavigationRetro />);
      const inputElement = screen.getByLabelText(INPUT_ARIA_LABEL_TEXT);
      expect(inputElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro loading span element by default", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form
      await act(async () => {
         fireEvent.change(inputElement, { target: { value: "ls" } });
         fireEvent.submit(formElement);
      });

      const loadingElement = screen.getByLabelText("Loading projects");
      expect(loadingElement).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: mockProjects,
            }),
         });

         await new Promise(process.nextTick);
      });
   });

   test("should render HeaderNavigationRetro error span element when API fetch fails", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form
      await act(async () => {
         fireEvent.change(inputElement, { target: { value: "ls" } });
         fireEvent.submit(formElement);
      });

      const loadingElement = screen.getByLabelText("Loading projects");
      expect(loadingElement).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: false,
            status: 500,
            json: async () => ({ message: "HTTP error! status: 500" }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = await screen.findByLabelText("Error message");

      expect(projectErrorSpan).toBeInTheDocument();
      expect(projectErrorSpan).toHaveTextContent("HTTP error! status: 500");
      expect(screen.queryByLabelText("Loading proejcts")).not.toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro error span element when API returns an empy list of projects", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form
      await act(async () => {
         fireEvent.change(inputElement, { target: { value: "ls" } });
         fireEvent.submit(formElement);
      });

      const loadingElement = screen.getByLabelText("Loading projects");
      expect(loadingElement).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               data: [],
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("No projects data available or unexpected format.");
      expect(projectErrorSpan).toBeInTheDocument();
      expect(screen.queryByLabelText("Loading projects")).not.toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro error span element when API returns null data", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form
      await act(async () => {
         fireEvent.change(inputElement, { target: { value: "ls" } });
         fireEvent.submit(formElement);
      });

      const loadingElement = screen.getByLabelText("Loading projects");
      expect(loadingElement).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               data: null,
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("No projects data available or unexpected format.");
      expect(projectErrorSpan).toBeInTheDocument();
      expect(screen.queryByLabelText("Loading projects")).not.toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro ul element with the correct aria-labelledby attribute", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form

      fireEvent.change(inputElement, { target: { value: "ls" } });
      fireEvent.submit(formElement);

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: mockProjects,
            }),
         });

         await new Promise(process.nextTick);
      });

      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveAttribute("aria-labelledby", "projects-menu-button");
   });

   test("should check if HeaderNavigationRetro ul element is hidden by default to then render after fetching goes right", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const navigationElement = screen.getByLabelText("Retro container");
      let ulElement = screen.queryByRole("list");
      expect(navigationElement).not.toContainElement(ulElement);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form

      fireEvent.change(inputElement, { target: { value: "ls" } });
      fireEvent.submit(formElement);

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: mockProjects,
            }),
         });

         await new Promise(process.nextTick);
      });

      ulElement = screen.queryByRole("list");
      expect(navigationElement).toContainElement(ulElement);
      expect(ulElement).toHaveClass("visible");
   });

   test("should render the list elements with the correct role and name", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<HeaderNavigationRetro />);

      const navigationElement = screen.getByLabelText("Retro container");
      let ulElement = screen.queryByRole("list");
      expect(navigationElement).not.toContainElement(ulElement);

      const inputElement = screen.getByLabelText("Search projects");
      const formElement = screen.getByLabelText("Search projects form");

      // Simulate typing "ls" and submitting the form

      fireEvent.change(inputElement, { target: { value: "ls" } });
      fireEvent.submit(formElement);

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: mockProjects,
            }),
         });

         await new Promise(process.nextTick);
      });

      ulElement = screen.queryByRole("list");
      expect(navigationElement).toContainElement(ulElement);
      expect(ulElement).toHaveClass("visible");

      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(3);
      expect(listItems[0]).toHaveTextContent("Project 1");
      expect(listItems[1]).toHaveTextContent("Project 2");
      expect(listItems[2]).toHaveTextContent("Project 3");
   });
});
