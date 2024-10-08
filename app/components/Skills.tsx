"use client";
import { useGSAP } from "@gsap/react";
import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRuby,
  SiCplusplus,
  SiGo,
  SiRust,
  SiTailwindcss,
  SiDotnet,
  SiSolidity,
  SiGraphql,
  SiMysql,
  SiPostman,
  SiVite,
  SiNetlify,
} from "react-icons/si";
import { skillsAnimation } from "../animation/text-animation";
import gsap from "gsap";

type SkillItemProps = {
  icon: React.ReactNode;
  text: string;
};

type ExperienceItemProps = {
  company: string;
  title: string;
  date: string;
  description: string;
};

type EducationItemProps = {
  institution: string;
  degree: string;
  date: string;
  description: string;
};

const Skills = () => {
  useGSAP(() => {
    const skillsClass = document.querySelectorAll(".skills-animation");
    const skillsArr = gsap.utils.toArray(skillsClass);

    skillsArr.forEach((skill) => {
      skillsAnimation(skill as HTMLElement);
    });
  });

  return (
    <div
      id="about"
      className="bg-gray-800 text-white p-6 lg:px-40 custom-radial-bot"
    >
      <h1 className="text-2xl mb-10 uppercase md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-[--orange-primary] to-[--dark-green] text-transparent bg-clip-text">
        Skills & Experience
      </h1>

      <div className="flex justify-between flex-col lg:flex-row">
        <div>
          {/* Programming Languages Section */}
          <section className="relative mb-8 border-l px-4 border-gray-500">
            <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4 pb-4">
              Programming Languages
            </h2>
            <div className="grid grid-cols-3 gap-3">
              <SkillItem icon={<SiRuby />} text="Ruby" />
              <SkillItem icon={<FaPython />} text="Python" />
              <SkillItem icon={<SiCplusplus />} text="C++" />
              <SkillItem icon={<SiGo />} text="Go" />
              <SkillItem icon={<SiRust />} text="Rust" />
              <SkillItem icon={<FaHtml5 />} text="HTML" />
              <SkillItem icon={<FaCss3 />} text="CSS" />
              <SkillItem icon={<FaJs />} text="JavaScript" />
              <SkillItem icon={<SiSolidity />} text="Solidity" />
            </div>
          </section>

          {/* Frameworks & Libraries Section */}
          <section className="relative mb-8 border-l-2 px-4 border-gray-500">
            <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4 pb-4">
              Frameworks/Libraries
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillItem icon={<FaReact />} text="ReactJS" />
              <SkillItem icon={<SiTailwindcss />} text="Tailwind CSS" />
              <SkillItem icon={<SiDotnet />} text=".NET" />
              <SkillItem icon={<SiGraphql />} text="GraphQL" />
              <SkillItem icon={<SiRuby />} text="Ruby on Rails" />
              {/* <SkillItem text="Django" />
          <SkillItem text="Bootstrap" />
          <SkillItem text="jQuery" /> */}
            </div>
          </section>

          {/* Tools Section */}
          <section className="relative mb-8 border-l-2 px-4 border-gray-500">
            <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4 pb-4">
              Tools
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillItem icon={<SiMysql />} text="MySQL" />
              <SkillItem icon={<SiPostman />} text="Postman" />
              <SkillItem icon={<FaGitAlt />} text="Git" />
              <SkillItem icon={<FaDatabase />} text="GitHub" />
              <SkillItem icon={<FaDatabase />} text="GitLab" />
              <SkillItem icon={<SiNetlify />} text="Netlify" />
              <SkillItem icon={<SiVite />} text="ViteJS" />
            </div>
          </section>
        </div>

        {/* Experience Section */}
        <section className="mb-8 border-l border-gray-500 lg:w-1/3">
          <h2 className="text-xl p-4 lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="relative px-4">
              <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>

              <ExperienceItem
                company="Central Park, New York"
                title="Park Adventure"
                date="Every Weekend"
                description="Max enjoys running around, meeting new dogs, and playing fetch with his favorite ball."
              />
            </div>

            <div className="relative px-4">
              <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>

              <ExperienceItem
                company="Beach, California"
                title="Beach Fun"
                date="Summer 2023"
                description="Max loves swimming in the ocean, digging in the sand, and chasing waves."
              />
            </div>

            <div className="relative px-4">
              <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>

              <ExperienceItem
                company="Dog Obedience School"
                title="Training Sessions"
                date="2022 - Present"
                description="Max attends weekly training classes to learn new tricks and improve his obedience."
              />
            </div>

            <div className="relative px-4">
              <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>

              <ExperienceItem
                company="Dog Obedience School"
                title="Training Sessions"
                date="2022 - Present"
                description="Max attends weekly training classes to learn new tricks and improve his obedience."
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 border-l border-gray-500  lg:w-1/3">
          <h2 className="text-xl p-4 lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Education
          </h2>
          <div className="space-y-8">
            <div className="relative px-4">
              <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>

              <EducationItem
                institution="Puppy Kindergarten"
                degree="Basic Obedience"
                date="2017 - 2021"
                description="Max completed his basic obedience training, learning to sit, stay, and come when called."
              />
            </div>
            <div className="relative px-4">
              <span className="absolute w-3 h-3 rounded-full bg-gray-500 left-0 -translate-x-1/2 top-2"></span>

              <EducationItem
                institution="Advanced Training School"
                degree="Advanced Obedience"
                date="2017 - 2021"
                description="Max excelled in his advanced obedience training, mastering off-leash commands and agility."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Reusable Component for Skill Items
const SkillItem = ({ icon, text }: SkillItemProps) => {
  return (
    <div className="flex flex-col gap-2 skills-animation">
      {icon && <div className="text-3xl">{icon}</div>}
      <p className="text-sm font-semibold text-gray-500">{text}</p>
    </div>
  );
};

// Reusable Component for Experience Items
const ExperienceItem = ({
  company,
  title,
  date,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="skills-animation">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      <h6 className="text-sm text-gray-500">{date}</h6>
      <p className="text-lg font-semibold text-gray-400">{title}</p>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const EducationItem = ({
  institution,
  degree,
  date,
  description,
}: EducationItemProps) => {
  return (
    <div className="skills-animation">
      <h3 className="text-xl font-bold text-white">{institution}</h3>
      <h6 className="text-sm text-gray-500">{degree}</h6>
      <p className="text-gray-400">{date}</p>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Skills;
