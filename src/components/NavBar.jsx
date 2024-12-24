function Navbar({ activeSection }) {
  return (
    <div className="hidden lg:flex lg:flex-col lg:justify-start">
      <a
        href="#whoami"
        className={`relative pb-1 ${
          activeSection === "#whoami" ? "font-bold" : "text-gray-500"
        }`}
      >
        <span
          className={`relative inline-block pr-6 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-heading after:transition-transform after:duration-300 ${
            activeSection === "#whoami"
              ? "after:scale-x-100"
              : "after:scale-x-0"
          }`}
        >
          Who am I?
        </span>
      </a>
      <a
        href="#hustlemap"
        className={`relative pb-1 ${
          activeSection === "#hustlemap" ? "font-bold" : "text-gray-500"
        }`}
      >
        <span
          className={`relative inline-block pr-6 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-heading after:transition-transform after:duration-300 ${
            activeSection === "#hustlemap"
              ? "after:scale-x-100"
              : "after:scale-x-0"
          }`}
        >
          Hustle Map
        </span>
      </a>
      <a
        href="#opensourcework"
        className={`relative pb-1 ${
          activeSection === "#opensourcework" ? "font-bold" : "text-gray-500"
        }`}
      >
        <span
          className={`relative inline-block pr-6 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-heading after:transition-transform after:duration-300 ${
            activeSection === "#opensourcework"
              ? "after:scale-x-100"
              : "after:scale-x-0"
          }`}
        >
          Open-Source Work
        </span>
      </a>
      <a
        href="#thingsihavemade"
        className={`relative pb-1 ${
          activeSection === "#thingsihavemade" ? "font-bold" : "text-gray-500"
        }`}
      >
        <span
          className={`relative inline-block pr-6 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-heading after:transition-transform after:duration-300 ${
            activeSection === "#thingsihavemade"
              ? "after:scale-x-100"
              : "after:scale-x-0"
          }`}
        >
          Things I have made
        </span>
      </a>
    </div>
  );
}

export default Navbar;
