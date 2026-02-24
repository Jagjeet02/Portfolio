import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

// import project1 from "../assets/projects/project1.png";
// import project2 from "../assets/projects/project1.png";
// import project3 from "../assets/projects/project1.png";
import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project1.png";
import project3 from "./assets/projects/project1.png";
import project4 from "./assets/projects/project1.png";
import project5 from "./assets/projects/project1.png";
import project6 from "./assets/projects/project1.png";
import project7 from "./assets/projects/project1.png";
import project8 from "./assets/projects/project1.png";
import project9 from "./assets/projects/project1.png";
import project10 from "./assets/projects/project1.png";
import profilePic from "./assets/profile-pic.png";
const projects = [
    {
        title: "Freelancer",
        image: project1,
        link: "#",
    },
    {
        title: "Personal",
        image: project2,
        link: "#",
    },
    {
        title: "Finance AI",
        image: project3,
        link: "#",
    },
        {
        title: "Freelancer",
        image: project4,
        link: "#",
    },
    {
        title: "Personal",
        image: project5,
        link: "#",
    },
    {
        title: "Finance AI",
        image: project6,
        link: "#",
    },
        {
        title: "Freelancer",
        image: project7,
        link: "#",
    },
    {
        title: "Personal",
        image: project8,
        link: "#",
    },
    {
        title: "Finance AI",
        image: project9,
        link: "#",
    },
        {
        title: "Finance AI",
        image: project10,
        link: "#",
    },
];
const HeroSection = () => {
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    {/* Logo / Name */}
                    <div className="logo">
                        <a href="/">&lt;Jagjeet Singh/&gt;</a>
                    </div>

                    {/* Navigation */}
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Experiences</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Certification</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero section">
                <div className="hero-content">
                    {/* Profile Image */}
                    <div className="profile-wrapper">
                        {/* <img
                            src="src/assets/profile-pic.png"
                            alt="profile"
                            className="profile-img"
                        /> */
                        <img src={profilePic} alt="profile" className="profile-img"/>}
                    </div>

                    {/* Tagline */}
                    <div className="badge">
                        creating digital experiences for humans
                    </div>

                    {/* Heading */}
                    <h3 className="hero-title">
                        Hi, I’m <span className="highlight">Jagjeet Singh</span>, a UI/UX Developer
                        specializing in <span className="highlight">Responsive Web & Frontend Development</span>.
                        I’m passionate about <em>creating user-centric and pixel-perfect digital experiences</em>
                    </h3>

                    {/* Buttons */}
                    <div className="hero-buttons">
                        <button className="btn primary">
                            Let’s Talk <FiMessageSquare />
                        </button>

                        <button className="btn secondary">
                            View Resume <HiOutlineDocumentText />
                        </button>

                        <div className="social-icons">
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaGithub /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                    </div>

                </div>
            </section>
            <section className="projects-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Projects</h2>
                        <p>
                            A reflection of my <span className="label">Growth</span> and{" "}
                            <span className="label">Passion</span>
                        </p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                image={project.image}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default HeroSection
