import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ContactForm from "../features/contact-form/ContactForm";
import Project from "../features/project/Project";
import ScrollToTop from "../utils/scrollToTop/ScrollToTop";
import { ThemeProvider } from "../utils/themeProvider/themeProvider";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function AppContent() {
   const location = useLocation();
   const isContactPage = location.pathname === "/contact";

   return (
      <>
         <ScrollToTop />
         <Header />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectName" element={<Project />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutMePage />} />
         </Routes>
         {!isContactPage && <ContactForm />}
         <Footer />
      </>
   );
}

function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <AppContent />
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
