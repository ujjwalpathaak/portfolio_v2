import "./App.css";
import Experience from "./components/Experience";
import Heading from "./components/Heading";
import Social from "./components/Social";
import config from "./config.json";
import HighlightText from "./components/HighlightText";

function App() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col p-10 md:flex-row">
      <div className="w-full overscroll-none md:w-1/2 md:overflow-y-hidden">
        <h1 className="text-4xl font-semibold text-textPrimary">
          {config.personalInfo.name}
        </h1>
        <h6 className="my-2 text-xl font-medium text-textPrimary">
          {config.personalInfo.position}
        </h6>
        <p className="text-textSecondary">
          <HighlightText
            text={config.personalInfo.about}
            wordsToHighlight={config.personalInfo.highlight_about}
          />
        </p>
        {/* socials */}
        <div className="mt-12 flex justify-between">
          {config.socials.map((social, index) => (
            <Social key={index} {...social} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 md:overflow-y-scroll">
        <div className="text-textPrimary">
          <Heading heading="About" />
          <HighlightText
            text={config.personalInfo.bio}
            wordsToHighlight={config.personalInfo.highlight_bio}
          />
        </div>
        <div>
          <Heading heading="Experience" />
          {config.experience.map((exp) => (
            <Experience {...exp} />
          ))}
        </div>
        <div className="">
          <Heading heading="Projects" />
          <h6>{config.personalInfo.about}</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
