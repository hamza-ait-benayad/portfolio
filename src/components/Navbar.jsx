import { navLinks } from "../constants/index";

function Navbar() {
  return (
    <header className="px-8 sm:px-32 py-4 w-full z-10 fixed top-0 bg-background shadow-2xl shadow-primary/12 text-primary ">
      <nav className="flex justify-between items-center ">
        <a className="font-bold text-4xl font-mono  leading-normal ">
          Portfolio
        </a>
        <ul className="flex gap-10 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-2xl font-mono hover:text-secondy transition-colors font-bold leading-normal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-10 sm:hidden">
          <h1>==</h1>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
