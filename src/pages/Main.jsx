import React from 'react'
import { useState, useEffect, useRef } from "react";
import "../App.css";
import Experience from "../components/Experience";
import Heading from "../components/Heading";
import Social from "../components/Social";
import config from "../config.json";
import HighlightText from "../components/HighlightText";
import Project from "../components/Project";
import OpenSource from "../components/OpenSource";
import Navbar from "../components/NavBar";
import ExternalLink from "../components/ExternalLink";
import Footer from "../components/Footer";

const Main = () => {
    const [activeSection, setActiveSection] = useState("");
    const scrollContainerRef = useRef(null);

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (!showSplash) {
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
                    root: scrollContainer,
                    threshold: 0.5,
                },
            );

            sections.forEach((section) => observer.observe(section));

            return () => observer.disconnect();
        }
    }, [showSplash]);
    return (
        <div className="main-content text-justify flex h-[100vh] w-[100vw] flex-col px-8 py-10 font-averia lg:flex-row lg:px-28 lg:py-0">
            {/* Left Sidebar */}
            <div className="w-full overscroll-none lg:ml-[calc(6vw)] lg:flex lg:w-[calc(42vw)] lg:flex-col lg:justify-between lg:overflow-y-hidden lg:py-24">
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
                className="no-scrollbar w-full lg:w-[calc(52vw)] lg:overflow-y-scroll"
            >
                <section id="whoami" className=" text-text">
                    <Heading heading="Who am I?" type="subheading" />
                    <div className="flex justify-center">
                        <img src={config.personalInfo.profile} alt="profile" className="w-1/2 h-1/2 mb-10" />
                    </div>
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
                <section id="thingsihavemade" className="mb-[10vh]">
                    <Heading heading="Things I have made" type="subheading" />
                    {config.projects.map((exp) => (
                        <Project {...exp} />
                    ))}
                    <ExternalLink text="Go to Project Archive →" link="/all/projects" />
                </section>
            </div>
        </div>
    )
}

export default Main