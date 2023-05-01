import HeaderLogo from "../images/logo.svg";
import { navLinks, socialLinks } from "../data";

const Header = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <img src={HeaderLogo} className="nav-logo" alt="backroads" />
               <button type="button" className="nav-toggle" id="nav-toggle">
                  <i className="fas fa-bars"></i>
               </button>
            </div>
            <ul className="nav-links" id="nav-links">
               {navLinks.map((link) => {
                  return (
                     <li key={link.id}>
                        <a href={link.href} className="nav-link">
                           {" "}
                           {link.text}{" "}
                        </a>
                     </li>
                  );
               })}
            </ul>

            <ul className="nav-icons">
               {socialLinks.map((link) => {
                  return (
                     <li key={link.id}>
                        <a
                           href={link.href}
                           target="_blank"
                           className="nav-icon"
                           rel="noreferrer"
                        >
                           <i className={link.icon}></i>
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </nav>
   );
};
export default Header;
