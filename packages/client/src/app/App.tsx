import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ContactForm from "../features/contactForm/ContactForm";
import ProjectsList from "../features/projectsList/ProjectsList";

function App() {
   return (
      <div>
         <Header />
         <ProjectsList />
         <ContactForm />
         <Footer />
      </div>
   );
}

export default App;
