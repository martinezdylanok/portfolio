export interface ProjectInterface {
   project_id: number;
   project_name: string;
   project_description: string;
   project_technologies: string;
}

const NAV_ARIA_LABEL_TEXT: string = "Header navigation";

const LIST_ARIA_LABEL_TEXT: string = "Default navigation list";

const HEADER_DEFAULT_NAVIGATION_LINKS = [
   { LABEL: "ABOUT", HREF: "/about", ARIA_LABEL: "About link" },
   { LABEL: "PROJECTS", HREF: "/projects", ARIA_LABEL: "Projects link" },
   { LABEL: "CONTACT", HREF: "/contact", ARIA_LABEL: "Contact link" },
];

export { HEADER_DEFAULT_NAVIGATION_LINKS, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT };
