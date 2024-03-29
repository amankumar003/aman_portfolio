"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Js Portfolio Website",
    description: "build using nextjs, tailwindcss, framer-motion",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amankumar003/aman_portfolio",
    previewUrl: "https://amanportfolio-six.vercel.app/",
  },
  {
    id: 2,
    title: "Insta a backend project",
    description: "Nodejs, express, javascript, mongodb",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/amankumar003/insta",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PROPVALUE PREDICTOR",
    description: "A full stack ML Project using Javascript and Python",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amankumar003/Real-Estate-House-Price-Predictor-WebApp",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ATS-Alumini Tracking Software",
    description: "A full stack Web app using javascript and nodejs",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amankumar003/ATS-Alumni_Tracking_System",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "olympics_azure_end_to_end_data_engineering",
    description: "Azure Cloud Based Data Engineering Project",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amankumar003/olympics_azure_end_to_end_data_engineering",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "The Bubble Game",
    description: "bubble Game using HTML, CSS, Javascript",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amankumar003/Bubble",
    previewUrl: "https://bubble-liard.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
