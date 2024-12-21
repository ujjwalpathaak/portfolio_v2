import "./App.css";
import Heading from "./components/Heading";
import config from "./config.json";

function App() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col p-10 md:flex-row">
      <div className="w-full overscroll-none md:w-1/2 md:overflow-y-hidden">
        <h1 className="text-4xl font-semibold text-textPrimary">
          {config.personalInfo.name}
        </h1>
        <h6 className="text-xl font-medium text-textPrimary">
          {config.personalInfo.position}
        </h6>
        <p className="text-textSecondary">{config.personalInfo.bio}</p>
        {/* links */}
        <div>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
        </div>
        {/* socials */}
        <div>
          <ul>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:overflow-y-scroll">
      <Heading heading="About" />
      <h6>{config.personalInfo.about}</h6>
      </div>
    </div>
  );
}

export default App;
