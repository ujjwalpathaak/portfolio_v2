import { useState, useEffect, useRef } from "react";
import "./App.css";
import Experience from "./components/Experience";
import Heading from "./components/Heading";
import Social from "./components/Social";
import config from "./config.json";
import HighlightText from "./components/HighlightText";
import Project from "./components/Project";
import OpenSource from "./components/OpenSource";
import Navbar from "./components/NavBar";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const sections = scrollContainer.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: scrollContainer, // Use the scrollable container as the root
        threshold: 0.6, // Trigger when 60% of the section is visible
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col px-8 py-10 font-averia lg:flex-row lg:px-28 lg:py-0">
      {/* Left Sidebar */}
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

        {/* Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Social Links */}
        <div className="mt-12 flex justify-evenly lg:justify-start">
          {config.socials.map((social, index) => (
            <Social key={index} {...social} />
          ))}
        </div>
      </div>

      {/* Right Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="w-full lg:w-1/2 lg:overflow-y-scroll no-scrollbar"
      >
        <section id="whoami" className="break-all text-text">
          <Heading heading="Who am I?" type="subheading" />
          <HighlightText
            text={config.personalInfo.bio}
            wordsToHighlight={config.personalInfo.highlight_bio}
          />
        </section>
        <section id="hustlemap">
          <Heading heading="Hustle Map" type="subheading" />
          {config.experience.map((exp) => (
            <Experience {...exp} />
          ))}
        </section>
        <section id="opensourcework" className="">
          <Heading heading="Open-Source Work" type="subheading" />
          {config.openSourceContributions.map((exp) => (
            <OpenSource {...exp} />
          ))}
        </section>
        <section id="thingsihavemade" className="">
          <Heading heading="Things I have made" type="subheading" />
          {config.projects.map((exp) => (
            <Project {...exp} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
