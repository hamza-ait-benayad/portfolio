import { IconContext } from "react-icons";
import { navLinks } from "../constants/index";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuView = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="px-8 sm:px-32 py-4 w-full z-10 fixed -top-2 bg-background shadow-2xl shadow-primary/12 text-primary">
      <nav
        className={`flex ${
          isMenuOpen && "max-lg:flex-col max-lg:h-[100vh]"
        } gap-20 items-center`}
      >
        <div className="flex justify-between w-full">
          <a className="font-bold text-4xl font-mono leading-normal ">
            Portfolio
          </a>
          <div className="flex gap-10 lg:hidden">
            <IconContext.Provider
              value={{
                color: "var(--color-primary-100)",
                size: "50",
                className: "",
              }}
            >
              <div onClick={handleMenuView}>
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <ul className={`flex gap-10 flex-col lg:flex-row ${isMenuOpen ? "flex" : "max-sm:hidden"}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-2xl font-mono hover:text-secondy transition-colors font-bold leading-normal"
                onClick={handleMenuView}
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
