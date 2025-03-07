import { ThemeProvider } from "../utils/themeProvider/themeProvider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ContactForm from "../features/contactForm/ContactForm";
import ProjectsList from "../features/projectsList/ProjectsList";

function App() {
   return (
      <ThemeProvider>
         <Header />
         <ProjectsList />
         <ContactForm />
         <Footer />
      </ThemeProvider>
   );
}

export default App;
