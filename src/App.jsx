import "./App.css";
import Experience from "./components/Experience";
import Heading from "./components/Heading";
import Social from "./components/Social";
import config from "./config.json";
import HighlightText from "./components/HighlightText";
import Project from "./components/Project";
import OpenSource from "./components/OpenSource";

function App() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col px-8 py-10 font-mono lg:flex-row lg:px-24 lg:py-0">
      <div className="w-full overscroll-none lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:overflow-y-hidden lg:py-24">
        <div>
          <Heading heading={config.personalInfo.name} type="name" />
          <Heading heading={config.personalInfo.position} type="position" />

          <p className="text-textSecondary">
            <HighlightText
              text={config.personalInfo.about}
              wordsToHighlight={config.personalInfo.highlight_about}
            />
          </p>
        </div>

        {/* socials */}
        <div className="mt-12 flex justify-evenly lg:justify-start">
          {config.socials.map((social, index) => (
            <Social key={index} {...social} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:overflow-y-scroll">
        <div className="break-all text-text">
          <Heading heading="Who am I?" type="subheading" />
          <HighlightText
            text={config.personalInfo.bio}
            wordsToHighlight={config.personalInfo.highlight_bio}
          />
        </div>
        <div>
          <Heading heading="Hustle Map" type="subheading" />
          {config.experience.map((exp) => (
            <Experience {...exp} />
          ))}
        </div>
        <div className="">
          <Heading heading="Some Open-Source Work" type="subheading" />
          {config.openSourceContributions.map((exp) => (
            <OpenSource {...exp} />
          ))}
        </div>
        <div className="">
          <Heading heading="Things I have made" type="subheading" />
          {config.projects.map((exp) => (
            <Project {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
