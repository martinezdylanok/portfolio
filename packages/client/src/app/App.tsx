import { ThemeProvider } from "../utils/themeProvider/themeProvider";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ContactForm from "../features/contactForm/ContactForm";
import ProjectsList from "../features/projectsList/ProjectsList";
import Project from "../features/project/Project";

function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<ProjectsList />} />
               <Route path="/projects" element={<ProjectsList />} />
               <Route path="/projects/:projectName" element={<Project />} />
            </Routes>
            <ContactForm />
            <Footer />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
