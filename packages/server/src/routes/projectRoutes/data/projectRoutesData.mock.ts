// Mock data for demonstration purposes, TODO: fetch data from a database
const projects = [
   { id: 1, name: "Project One", description: "Description for project one", details: "Details for project one", features: "Features for project one", results: "Results for project one" },
   { id: 2, name: "Project Two", description: "Description for project two", details: "Details for project two", features: "Features for project two", results: "Results for project two" },
   { id: 3, name: "Project Three", description: "Description for project three", details: "Details for project three", features: "Features for project three", results: "Results for project three" },
   { id: 4, name: "Project Four", description: "Description for project four", details: "Details for project four", features: "Features for project four", results: "Results for project four" },
   { id: 5, name: "Project Five", description: "Description for project five", details: "Details for project five", features: "Features for project five", results: "Results for project five" },
];

const getProjectByName = (projectName: string) => {
   return projects.find((project) => project.name.toLocaleLowerCase() === projectName);
};

export default getProjectByName;
