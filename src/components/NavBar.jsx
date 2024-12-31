import { Link } from "react-router-dom";

function Navbar({ activeSection }) {
  return (
    <>
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
            className={`relative pb-1 ${activeSection === id ? "font-bold" : "text-text"
              }`}
          >
            <span className="group relative inline-block pr-6">
              {/* Yellow Swipe Background */}
              <span
                className={`absolute inset-0 origin-left scale-x-0 transform bg-yellow-300 transition-transform duration-300 group-hover:scale-x-100 ${activeSection === id ? "scale-x-100" : ""
                  }`}
              ></span>

              {/* Underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full origin-left transform bg-heading transition-all duration-300 ${activeSection === id ? "scale-x-100" : "scale-x-0"
                  }`}
              ></span>

              {/* Text */}
              <span
                className={`relative z-10 transition ${activeSection === id ? "font-bold text-heading" : ""
                  }`}
              >
                {label}
              </span>
            </span>
          </a>
        ))}
      </div>
      <div className="mt-6 flex flex-col lg:justify-start">
        {[
          { id: "all/projects", label: "Visit Project Archive" },
          { id: "https://drive.google.com/file/d/1UnHN2rxOJ0q679TGNrNLxEpOBWXbp5KU/view?usp=sharing", target: "_blank", label: "Open Resume" },
        ].map(({ id, label, target }) => (
          <Link
            to={id}
            rel="noreferrer noopener"
            target={target || undefined}
            className="group relative inline-block pr-6 w-fit transition duration-300 text-text"
          >
            {label}
            <span className="absolute inset-0 -z-10 w-0 h-full bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
