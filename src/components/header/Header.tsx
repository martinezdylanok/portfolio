import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import ModeSwitcher from "./components/ModeSwitcher";

const Header = () => {
   return (
      <header>
         <Logo />
         <Navigation />
         <ModeSwitcher />
      </header>
   );
};

export default Header;
