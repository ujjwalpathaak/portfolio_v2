function Navbar({ activeSection }) {
  return (
    <div className="hidden lg:flex lg:flex-col lg:justify-start">
      {[
        { id: "#whoami", label: "Who am I?" },
        { id: "#hustlemap", label: "Hustle Map" },
        { id: "#opensourcework", label: "Open-Source Work" },
        { id: "#thingsihavemade", label: "Things I have made" },
      ].map(({ id, label }) => (
        <a
          key={id}
          href={id}
          className={`relative pb-1 ${
            activeSection === id ? "font-bold" : "text-gray-500"
          }`}
        >
          <span className="relative inline-block pr-6 group">
            {/* Yellow Swipe Background */}
            <span
              className={`absolute inset-0 bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                activeSection === id ? "scale-x-100" : ""
              }`}
            ></span>

            {/* Underline */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-heading transform origin-left transition-all duration-300 ${
                activeSection === id ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>

            {/* Text */}
            <span
              className={`relative z-10 transition ${
                activeSection === id ? "text-heading font-bold" : ""
              }`}
            >
              {label}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default Navbar;