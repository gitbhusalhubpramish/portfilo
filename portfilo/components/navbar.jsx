export default function Navbar() {
  const linkclass =
    "hover:text-[#0b1120]/60 text-sm sm:text-xs md:text-lg";
  const ulcls =
    "list-none text-sm sm:text-base md:text-lg text-[#9b9b9b]";

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-11/12 max-w-4xl z-50
        backdrop-blur-md bg-white/90
        border border-white/20
        rounded-xl py-4 px-6 text-[#0b1120]/50
      "
    >
      <div className="flex items-center justify-between">
        <h1 className="mr-5 text-lg sm:text-xl md:text-2xl font-semibold">
          Pramish
        </h1>

        {/* Desktop items – hidden on small screens */}
        <div className="hidden sm:flex md:flex-none md:w-1/2 sm:flex-1 sm:justify-around">
          <ul className={ulcls}>
            <li>
              <a href="/" className={linkclass}>
                Home
              </a>
            </li>
          </ul>
          <ul className={ulcls}>
            <li>
              <a href="/projects" className={linkclass}>
                Projects
              </a>
            </li>
          </ul>
          <ul className={ulcls}>
            <li>
              <a href="/skills" className={linkclass}>
                Skills
              </a>
            </li>
          </ul>
          <ul className={ulcls}>
            <li>
              <a href="/contact" className={linkclass}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
