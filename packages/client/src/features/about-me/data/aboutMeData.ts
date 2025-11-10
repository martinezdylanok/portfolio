export const ABOUT_ME_ARIA_LABEL = "About Me Section";
export const ABOUT_ME_DETAILED_ARIA_LABEL = "About Me Detailed Section";
export const ABOUT_ME_TEST_ID = "about-me-section";
export const ABOUT_ME_DETAILED_TEST_ID = "about-me-detailed-section";

export const ABOUT_ME_HEADER_TITLE: string = "DYLAN MARTINEZ";
export const ABOUT_ME_HEADER_IMAGE_ALT_TEXT: string = "Dylan Martinez portrait";
export const ABOUT_ME_HEADER_IMAGE_TEXT: string = "I'M WATCHING YOU";
export const ABOUT_ME_CONTENT_TEXT_FIRST: string = "I am a Full-stack Software Developer from Argentina. Based in Copenhagen, Denmark, with +2 years of experience building modern end-to-end web applications. My passion for technology began early in my life when my mother first introduced me to computers in a small cybercafé. Fast forward today, I craft and maintain performant and user-focused solutions with passion and professionalism for each of my clients.";
export const ABOUT_ME_CONTENT_TEXT_SECOND: string = "I use React, TypeScript, Express and so many other tools to build my projects. My goal is to help business and individuals turn their ideas into real, performant and user-focused digital products that both look and work greatly. If you're looking for somebody who REALLY cares, then you're talking to the right person.";
export const ABOUT_ME_CONTENT_LINK_KNOW_MORE_TEXT: string = "KNOW MORE";
export const ABOUT_ME_CONTENT_LINK_CONTACT_TEXT: string = "CONTACT ME";

export const CATEGORY_NAME: string[] = ["ME", "PHILOSOPHY", "TOOLS", "STORY"];

export const CATEGORY_DESCRIPTION: string[] = ["THE WHY", "THE HOW", "UNDER CONSTRUCTION"];

export const INTRO_TEXTS: string[] = ["Dylan Martinez is a Full-stack Software Developer with +2 years of experience from Argentina, based in Copenhagen, Denmark.", "Web development is a passion that started earlier in my life when I first got introduced to a computer, by my mother, in a cybercafe.", "All of the projects were I got involded are built around modern web technologies such as React, TypeScript and Express among many other cool libraries and frameworks.", "My projects, my work, is something I want to be proud of, and I put both my passion and professionalism on that, creating solutions that performs and fascinate users by equal."];

export type PhilosophyColumns = "Column N1" | "Column N2" | "Column N3" | "Column N4";

export const PHILOSOPHY_COLUMNS: PhilosophyColumns[] = ["Column N1", "Column N2", "Column N3", "Column N4"];

export const PHILOSOPHY_PRINCIPLES: string[] = ["Listen more than you speak.", "Simplify until it can't be more simple.", "Think globally and locally.", "Invert, always invert. Focus first on what NOT to do.", "Think in terms of incentives, do not change people/situations, change their incentives.", "The people surrounding you are an extension of you.", "A good product/service makes great part of its marketing.", "Opposite rule: Stimulate, provoke, do new things, break habits.", "Seek for freedom above all.", "Your way of thinking shapes your reality.", "Focus on the principles of each area/task of your life (80/20 rule).", "Be the kind of person that you will like to meet.", "Don't try to be someone else, use the unfair advantage of being YOU.", "Time > Money.", "Do not fix what is not broken."];

export const PHILOSOPHY_DISCLAIMER = "Disclaimer: Each of the principles appearing on this list are the result of distilling thoughts both other's and mine, and are under revision all the time.";

export type ToolCategoryTitle = "CHORE" | "FRONT-END" | "BACK-END" | "DEVOPS" | "QUALITY";

export interface ToolCategory {
   title: ToolCategoryTitle;
   description: string;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
   {
      title: "CHORE",
      description: "JavaScript, TypeScript, React, Vue, Node.js/Express, REST APIs, GraphQL, PostgreSQL, MySQL",
   },
   {
      title: "FRONT-END",
      description: "HTML, CSS, responsive & mobile first, accessibility(WCAG/ARIA), state management(Redux/Zustand), Vite/Webpack, Storybook, Core Web Vitals",
   },
   {
      title: "BACK-END",
      description: "Microservices, auth(OAuth/JWT), security(OWASP), ORM(Prisma/TypeORM), Redis, RabbitMQ/Kafka",
   },
   {
      title: "DEVOPS",
      description: "Git, Docker, CI/CD(GitHub Actions/GitLab CI), Kubernetes, Terraform, monitoring(Prometheus/Grafana), AWS/Azure/Google Cloud/Vercel/Digital Ocean",
   },
   {
      title: "QUALITY",
      description: "Clean Code, OOP, SOLID, DRY, TDD, code reviews, Agile/Scrum/Kanban",
   },
];

export const STORY_IMAGES = [
   { src: "/old-monitor.png", alt: "Old computer monitor representing early career" },
   { src: "/office-monitor.png", alt: "Office monitor representing professional growth" },
   { src: "/laptop.png", alt: "Modern laptop representing current work" },
];
