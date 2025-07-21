import React, { useState, useEffect } from "react";
import Cursor from "../HelperComponents/Cursor";
import ProjectCard from "../HelperComponents/ProjectCard";
import { Link } from "react-router-dom";

const projects = [
  {
    image: "/Uploads/momiji2.jpg",
    title: "Momiji International Academy",
    subtitle: "Integrating AR to elevate social commerce",
  },
  {
    image: "/Uploads/kansai.png",
    title: "Kansai International Language Center",
    subtitle: "Host your child's birthday at Joe",
  },
  {
    image: "/Uploads/nisani.jpg",
    title: "Nisani",
    subtitle: "Immersive product experience",
  },
  {
    image: "Uploads/namodebi.jpg",
    title: "Navadebi Jwellers",
    subtitle: "Educational Consultancy",
  },
];

export default function HomeProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    text: "View all Projects",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorState((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    if (cursorState.isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorState.isVisible]);

  const handleMouseEnter = () => {
    setCursorState((prev) => ({ ...prev, isVisible: true }));
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorState((prev) => ({ ...prev, isVisible: false }));
    document.body.style.cursor = "auto";
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-white ">
      <div className="container mx-auto px-6 pt-[26rem] md:pt-20">
        <div className="flex items-center flex-col justify-center mb-12 gap-4">
          <div className="text-4xl md:text-7xl font-extrabold text-center ">
            Our{" "}
            <span className="logo bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text">
              Projects
            </span>
          </div>
          <div className="text-center text-base md:text-xl font-extralight max-w-3xl">
            Explore a curated selection of our work, where creativity meets
            strategy. From impactful brand identities to dynamic digital
            experiences, each project reflects our commitment to excellence and
            innovation.
          </div>
        </div>
        {/* {windowWidth >= 768 && (
          <Cursor
            isVisible={cursorState.isVisible}
            position={cursorState.position}
            text={cursorState.text}
          />
        )} */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onHover={handleMouseEnter}
              onLeave={handleMouseLeave}
            />
          ))}
        </div>
        <Link to="/project">
          <div className="mt-16 text-center">
            <button className="text-2xl font-medium text-gray-600 border-b border-gray-300 hover:text-black hover:border-black transition-all duration-300">
              View all Projects →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
