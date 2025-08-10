import React from "react";
import Marquee from "react-fast-marquee";
import { FiExternalLink, FiLinkedin, FiDownload, FiArrowDown, FiHeart } from "react-icons/fi";

import ReactNativeIcon from "./assets/react-native.svg";
import TypeScriptIcon from "./assets/typescript.svg";
import FirebaseIcon from "./assets/firebase.svg";
import ReactIcon from "./assets/react.svg";
import ReduxIcon from "./assets/redux.svg";
import PostgreSQLIcon from "./assets/postgresql.svg";
import TailwindCSSIcon from "./assets/tailwindcss.svg";
import FigmaIcon from "./assets/figma.svg";
import SQLiteIcon from "./assets/sqlite.svg";
import GitIcon from "./assets/git.svg";
import PrismaIcon from "./assets/prisma.svg";
import ExpoIcon from "./assets/expo.svg";

const projects = [{
  title: "Couply: Together is better!",
  link: "https://github.com/sirwacheski/couply",
  description: "A mobile app that allows couples to create, share, and manage notes, reminders, and tasks together.",
  tech: ["Expo", "TypeScript", "Supabase", "Zustand", "React Navigation", "Firebase"],
  icon: FiHeart,
}]

const skills = [
  { name: "React Native", icon: ReactNativeIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "React", icon: ReactIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "TailwindCSS", icon: TailwindCSSIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "SQLite", icon: SQLiteIcon },
  { name: "Git", icon: GitIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "Expo", icon: ExpoIcon }
]

export function Application() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="w-full min-h-screen relative">
      <header className="w-full h-16 fixed top-0 backdrop-blur-md z-50 px-7 md:px-20 flex flex-row items-center justify-between bg-black/80">
        <div>
          <a href="/">
            <h1 className="text-2xl font-bold">EW.</h1>
          </a>
        </div>
        <button
        aria-label="Open menu"
        className="md:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-text border-gray-700"
        onClick={() => setMenuOpen(!isMenuOpen)}>
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
        <div className="hidden md:flex flex-row items-center gap-x-10">
          <a href="/#about" className="navigation-link">About Me</a>
          <a href="/#projects" className="navigation-link">Projects</a>
          <a href="/#expertise" className="navigation-link">Expertise</a>
        </div>
        <div className="hidden md:block">
          <button className="primary-button" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </button>
        </div>
        {isMenuOpen && (
          <div 
          className="absolute top-16 left-0 w-full bg-black/95 flex flex-col items-center gap-y-4 py-6 md:hidden z-50">
            <a href="/#about" className="navigation-link" onClick={() => setMenuOpen(false)}>About Me</a>
            <a href="/#projects" className="navigation-link" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/#contact" className="navigation-link" onClick={() => setMenuOpen(false)}>Expertise</a>
            <button className="primary-button w-4/5 mt-2" onClick={() => setMenuOpen(false)}>
              Contact Me
            </button>
          </div>
        )}
      </header>
      <section 
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-0 py-16 md:py-0">
        <div className="flex flex-1 flex-col items-center justify-center mt-20">
          <div className="flex flex-col gap-y-4 md:gap-y-7">
            <span className="text-base md:text-xl text-center font-light text-text/50">Hi there! I'm</span>
            <h1 className="text-4xl md:text-7xl text-center font-bold text-text">Elias Wacheski!</h1>
          </div>
          <div className="w-full max-w-xl md:max-w-3xl mt-6 md:mt-9">
            <p className="text-center text-base md:text-xl font-light text-text/70">
              A passionate software engineer with more than five years of experience specializing in building cross-platforms apps using React & React Native.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-x-5 mb-20 md:mb-30">
          <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="w-14 h-14 cursor-pointer border rounded-full text-text/50 border-text/50 flex items-center justify-center hover:border-text/80 hover:text-text transition-all duration-300 animate-bounce">
            <FiArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </section>
      <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-16 md:py-30">
        <div className="flex flex-col gap-y-10 text-center">
          <span className="text-sm text-text/50">About Me</span>
          <h1 className="text-4xl font-bold text-text">Always trying<br /><span className="text-text/70 font-light">to innovate</span></h1>
        </div>
        <div className="w-full max-w-4xl mt-16 flex flex-row flex-wrap items-stretch justify-center gap-5">
          <span className="text-lg text-center text-text/70">
            A software engineer dedicated to creating innovative and impactful solutions.
            With over five years of experience, specialized in building cross-platform applications using React & React Native.
            I have skills in web, mobile and desktop development, as well as API integration and databases.
            Additionally, I have experience in teamwork, problem solving and continuous learning,
            always seeking new technologies and challenges to improve myself.
          </span>
        </div>
        <div className="mt-20">
          <button 
          className="secondary-button flex flex-row items-center gap-x-2 px-4 py-2 text-sm md:text-base"
          onClick={() => window.open("https://drive.google.com/uc?export=download&id=11-AW5gYoqElEZJcv8a0AKwmsn8MlU0ON")}>
            <FiDownload />
            <span>Download Resume</span>
          </button>
        </div>
      </section>
      <section
      id="projects"
      className="w-full flex flex-col items-center justify-center py-16 md:py-32">
        <div className="flex flex-col gap-y-10 text-center">
          <span className="text-sm text-text/50">Projects</span>
          <h1 className="text-4xl font-bold text-text">Building apps<br /><span className="text-text/70 font-light">that matters</span></h1>
        </div>
        <div className="w-full max-w-5xl mt-16 flex flex-row flex-wrap items-stretch justify-center gap-5">
          {projects.map((project, index) => (
            <div
            key={index}
            className="w-[90%] md:w-[30%] flex flex-col gap-y-5 p-7 border border-text/20 rounded-3xl">
              <div className="flex flex-row items-center justify-between">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary">
                  <project.icon color="white" size={20} />
                </div>
                <div>
                  <button 
                  className="cursor-pointer"
                  onClick={() => window.open(project.link)}>
                    <FiExternalLink className="text-text/50" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <h2 className="text-text font-bold text-xl">{project.title}</h2>
                <span className="text-sm text-text/70 font-light">{project.description}</span>
              </div>
              <div className="flex flex-row flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <div
                  key={index}
                  className="flex items-center justify-center px-3 py-1.5 rounded-full bg-text/10">
                    <span className="text-sm text-text/70">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
      id="expertise"
      className="w-full flex flex-col items-center justify-center py-16 md:py-32">
        <div className="flex flex-col gap-y-10 text-center">
          <span className="text-sm text-text/50">Expertise</span>
          <h1 className="text-4xl font-bold text-text">Skills that <br /><span className="text-text/70 font-light">make difference</span></h1>
        </div>
        <div className="w-full mt-16">
          <div className="w-full">
            <Marquee
            delay={0.5}
            direction={"left"}>
              <div className="flex flex-row">
                {skills.map((skill, index) => (
                  <div
                  key={index}
                  className="w-40 h-40 mx-3 pb-5 px-2 flex flex-col rounded-2xl border border-text/20">
                    <div className="flex flex-1 items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className="w-14 h-14 skill-image" />
                    </div>
                    <div className="w-full text-center">
                      <span className="text-sm text-text/70">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="w-full mt-5">
            <Marquee
            delay={0.5}
            direction={"right"}>
              <div className="flex flex-row">
                {skills.reverse().map((skill, index) => (
                  <div
                  key={index}
                  className="w-40 h-40 mx-3 pb-5 px-2 flex flex-col rounded-2xl border border-text/20">
                    <div className="flex flex-1 items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className="w-14 h-14 skill-image" />
                    </div>
                    <div className="w-full text-center">
                      <span className="text-sm text-text/70">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section
      id="contact"
      className="w-full flex flex-col items-center justify-center py-16 md:py-32">
        <div className="flex flex-col gap-y-10 text-center">
          <span className="text-sm text-text/50">Contact Me!</span>
          <h1 className="text-4xl font-bold text-text">Ready to <br /><span className="text-text/70 font-light">contact me?</span></h1>
        </div>
        <div className="w-full max-w-xl md:max-w-3xl text-center mt-16">
          <span className="text-lg text-text/70 font-light">I'm very excited to work on new projects and collaborate with amazing people. Let's discuss how we can create something incredible together.</span>
        </div>
        <div className="w-full flex flex-row justify-center mt-16">
          <button 
          className="primary-button"
          onClick={() => window.open("https://www.linkedin.com/in/elias-wacheski")}>
            <FiLinkedin />
            <span>LinkedIn</span>
          </button>
        </div>
      </section>
      <footer className="mt-32 mb-10 flex flex-col items-center">
        <div className="w-[90%] h-px flex bg-text/10"></div>
        <div className="mt-10 text-center">
          <span className="text-sm text-text/50">© 2023 Elias Wacheski. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}