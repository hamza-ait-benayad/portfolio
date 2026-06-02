import { IconContext } from "react-icons";
import { navLinks } from "../constants/index";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuView = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-8 sm:px-32 py-4 w-full fixed top-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-sm"
      } text-primary`}
    >
      <nav
        className={`flex ${
          isMenuOpen && "max-lg:flex-col max-lg:h-[100vh]"
        } gap-20 items-center`}
      >
        <div className="flex justify-between w-full">
          <a
            href="#home"
            className="font-bold text-3xl sm:text-4xl font-mono leading-normal hover:text-secondary transition-colors duration-300"
          >
            Portfolio
          </a>
          <div className="flex gap-10 lg:hidden">
            <IconContext.Provider
              value={{
                color: "var(--color-primary)",
                size: "50",
                className: "",
              }}
            >
              <button
                onClick={handleMenuView}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="bg-transparent border-none p-0"
              >
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </button>
            </IconContext.Provider>
          </div>
        </div>
        <ul
          className={`flex gap-10 flex-col lg:flex-row ${
            isMenuOpen ? "flex" : "max-lg:hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-2xl font-mono hover:text-secondary transition-colors font-bold leading-normal"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
