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
                            <img src={profilePic} alt="profile" className="profile-img" />}
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
                    <div className="view-more">
                        <button className="btn primary">
                            View More
                        </button>
                    </div>
                </div>
            </section>
            <section className="experience-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Experiences</h2>
                        <p>
                            A summary of the <span>Design, Development & User-Centric Solutions</span>
                            that have shaped my journey as a UI/UX Developer
                        </p>
                    </div>

                    <div className="timeline">

                        {/* CURRENT ROLE */}
                        <div className="timeline-item">
                            <div className="timeline-left">
                                <h3>Sourcemash Technologies <span>(Full-Time)</span></h3>
                                <div className="badge">UI / UX Developer</div>

                                <p>
                                    Leading the design and development of responsive web interfaces,
                                    focusing on usability, performance, and scalable UI architecture.
                                </p>

                                <ul>
                                    <li>Developed pixel-perfect, responsive UI using modern frontend technologies</li>
                                    <li>Improved UX by refining layouts, navigation flow, and interaction patterns</li>
                                    <li>Built reusable component-based UI structure for scalability</li>
                                    <li>Optimized website performance and reduced loading time</li>
                                    <li>Ensured accessibility standards and cross-browser compatibility</li>
                                </ul>
                            </div>

                            <div className="timeline-center">
                                <div className="circle"></div>
                            </div>

                            <div className="timeline-right">
                                <span className="date">December 2025 – Present</span>
                            </div>
                        </div>


                        {/* PREVIOUS ROLE */}
                        <div className="timeline-item">
                            <div className="timeline-left timeline-sec">
                                <span className="date">June 2025 – December 2025</span>
                            </div>

                            <div className="timeline-center">
                                <div className="circle"></div>
                            </div>

                            <div className="timeline-right">
                                <h3>Sourcemash Technologies <span>(Internship)</span></h3>
                                <div className="badge">UI / UX Intern</div>

                                <p>
                                    Assisted in designing and implementing user-friendly interfaces,
                                    translating design concepts into responsive web layouts.
                                </p>

                                <ul>
                                    <li>Converted Figma designs into functional frontend layouts</li>
                                    <li>Worked closely with senior developers on UI improvements</li>
                                    <li>Enhanced visual consistency and UI alignment across pages</li>
                                    <li>Implemented basic animations and micro-interactions</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="education-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Education</h2>
                        <p>
                            Where <span>theory, fundamentals & practical learning</span> shaped
                            my foundation as a Computer Science Engineer
                        </p>
                    </div>

                    <div className="education-list">

                        {/* B.Tech */}
                        <div className="education-item">
                            <div className="edu-left">
                                <h3>B.Tech in Computer Science Engineering</h3>
                                <p className="institution">
                                    Guru Nanak Dev Engineering College, Ludhiana
                                </p>
                                <p className="details">
                                    CGPA: <strong>7.8 / 10</strong>
                                </p>
                                <p className="duration">2021 – 2025</p>
                            </div>
                        </div>

                        {/* 12th */}
                        <div className="education-item">
                            <div className="edu-left">
                                <h3>Senior Secondary (12th)</h3>
                                <p className="institution">
                                    Govt. Sen. Sec. Smart School PAU, Ludhiana (PSEB)
                                </p>
                                <p className="details">
                                    Percentage: <strong>84%</strong>
                                </p>
                                <p className="duration">2021</p>
                            </div>
                        </div>

                        {/* 10th */}
                        <div className="education-item">
                            <div className="edu-left">
                                <h3>Matriculation (10th)</h3>
                                <p className="institution">
                                    Preet Gobind Model High School, Jodhan (PSEB)
                                </p>
                                <p className="details">
                                    Percentage: <strong>90%</strong>
                                </p>
                                <p className="duration">2019</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default HeroSection
