import React, { useEffect } from 'react';
import { data } from './data';
import './App.css'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.section-link');

    const handleScroll = () => {
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.pageYOffset >= sectionTop - 60 && window.pageYOffset < sectionBottom) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePointerMove = (e) => {
    const bg = document.getElementById('cursor-bg');
    if (bg) {
      bg.style.display = 'block';
      bg.style.top = `${e.pageY - 250}px`;
      bg.style.left = `${e.pageX - 250}px`;
    }
  };

  const handleMouseLeave = () => {
    const bg = document.getElementById('cursor-bg');
    if (bg) {
      bg.style.display = 'none';
    }
  };

  return (
    <div
      className="portfolio"
      onMouseMove={handlePointerMove}
      onMouseLeave={handleMouseLeave}
    >
      <div id="cursor-bg"></div>
      <div className="left-column">
        <div className="left-column-details">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
        </div>
        <div className="left-column-sections">
          <a href="#section1" className="section-link">
            Section 1
          </a>
          <a href="#section2" className="section-link">
            Section 2
          </a>
          <a href="#section3" className="section-link">
            Section 3
          </a>
        </div>
        <div className="socials">
          <a href="https://github.com/ujjwalpathaak" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ujjwalpathak/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="right-column">
        <section id="section1">
          <h2>Experience</h2>
          <p>
            <strong>Full Stack Developer Intern</strong> - Culinda Inc. (RecRoid) (Jan 2024 - Present)
          </p>
          <ul>
            <li>Developed and maintained backend services using FastAPI.</li>
            <li>Created job application scraping bots and migrated them to JavaScript.</li>
          </ul>
        </section>
        <section id="section2">
          <h2>Projects</h2>
          <p>
            <strong>InterviewLabs</strong>: A platform with real-time collaborative C++ coding and IDE.
          </p>
          <p>
            <strong>Pintastic</strong>: A pin-sharing platform inspired by Pinterest.
          </p>
        </section>
        <section id="section3">
          <h2>Open Source Contributions</h2>
          <p>Contributed 9+ PRs to WikiEducationFoundation's Dashboard project.</p>
        </section>
      </div>
    </div>
  )
}

export default App
