"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors Of Technology-ECE CGPA-7.65 2020-2024</li>
        <li>Shri Mata Vaishno Devi University, Katra, India</li>
        <br />
        <li>ST.Paul Senior Secondary School percentage-86 2019</li>
      </ul>
    ),
  },
  {
    title: "Responsibilities",
    id: "Responsibilities",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://gdsc.community.dev/shri-mata-vaishno-devi-university-katra/">
            Google Developer Student Club Lead 23 link
          </a>
          <li>
            Established Google DSC on campus, leading 60+ student developers,
            fostering a growth mindset
          </li>
          <li>
            Initiated ”Project Ananta,” managing 10+ community projects with 80+
            team members and 20 mentors, contributing to community development.
          </li>
          <li>
            Enhanced communication and public speaking skills by conducting and
            hosting 23+ sessions on GCP, Web, and ML
          </li>
        </li>
        <li>
          <a href="https://example.com/training-placement">
            Training And Placement Coordinator
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/tech-smvdu/">
            SMVDU TECH COMMUNITY Link
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Experince",
    id: "Experince",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BRAINLOX | AI Intern
          <li>
            Developed Back-end APIs with AWS Lambda and API Gateway for chatbot
          </li>
          <li>
            Architected a CMS infrastructure that resulted in improved
            performance from 45% to 99% success rate
          </li>
          <li>
            Implementeed efficient page routing, integrated bot apis in
            companys web application Brainlox.ai, leveraging React.js and
            Nodejs,resulting in enhanced 40% customer engagement.
          </li>
          <li>
            Developed and maintained server-side logic integrating with a
            variety of data sources and complex APIs
          </li>
        </li>
        <li>
          LOCALYTEE | Software Engineer Intern
          <li>
            Developed React.Js landing page tailored for a US-based real estate
            client with, enhancing user experience.
          </li>
          <li>
            Addressed and rectified 30+ bugs, front-end issues in the mobile
            app, utilizing React-native for optimization.
          </li>
          <li>
            Participated in Agile development processes and Scrum meetings,
            resulting in a 20% increase in project completion rate and a 15%
            reduction in project costs.
          </li>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="myImage" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MongoDB,Next.js ,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Responsibilities")}
              active={tab == "Responsibilities"}
            >
              {" "}
              Responsibilities{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experince")}
              active={tab === "Experince"}
            >
              {" "}
              Experince{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
