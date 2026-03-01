import React, { useState } from 'react'; // Missing useState import!
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project1.png";
import project3 from "./assets/projects/project1.png";
import project4 from "./assets/projects/project1.png";
import project5 from "./assets/projects/project1.png";
import project6 from "./assets/projects/project1.png";

import profilePic from "./assets/profile-pic.png";
import certificate from "./assets/projects/mern-certificate.jpg";


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
    // Moved useState inside the component!
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Skills', icon: '🚀' },
        { id: 'frontend', label: 'Frontend', icon: '🎨' },
        { id: 'ui', label: 'UI/UX', icon: '✨' },
        { id: 'tools', label: 'Tools', icon: '🛠️' }
    ];

    const skillGroups = [
        {
            category: 'frontend',
            title: 'Frontend Development',
            icon: '⚛️',
            skills: [
                { name: 'HTML5', level: 5 },
                { name: 'CSS3', level: 5 },
                { name: 'SCSS / SASS', level: 5 },
                { name: 'JavaScript (ES6+)', level: 5 },
                { name: 'React.js', level: 5 },
                { name: 'Next.js', level: 4 },
                { name: 'TypeScript', level: 4 },
                { name: 'Bootstrap', level: 4 }
            ]
        },
        {
            category: 'ui',
            title: 'UI / Styling',
            icon: '🎯',
            skills: [
                { name: 'Responsive Design', level: 5 },
                { name: 'Flexbox & Grid', level: 5 },
                { name: 'Tailwind CSS', level: 4 },
                { name: 'Animation', level: 4 },
                { name: 'Framer Motion', level: 3 },
                { name: 'Accessibility', level: 4 },
                { name: 'Design Systems', level: 4 }
            ]
        },
        {
            category: 'tools',
            title: 'Tools & Design',
            icon: '🔧',
            skills: [
                { name: 'Figma', level: 4 },
                { name: 'Git & GitHub', level: 5 },
                { name: 'VS Code', level: 5 },
                { name: 'Chrome DevTools', level: 5 },
                { name: 'Postman', level: 4 },
                { name: 'Webpack', level: 3 },
                { name: 'Jest', level: 3 }
            ]
        }
    ];

    // Moved filteredSkills inside the component
    const filteredSkills = activeCategory === 'all'
        ? skillGroups
        : skillGroups.filter(group => group.category === activeCategory);

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
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experiences</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#certification">Certification</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero section">
                <div className="hero-content">
                    {/* Profile Image */}
                    <div className="profile-wrapper">
                        <img src={profilePic} alt="profile" className="profile-img" />
                    </div>

                    {/* Tagline */}
                    <div className="badge">
                        creating digital experiences for humans
                    </div>

                    {/* Heading */}
                    <h3 className="hero-title">
                        Hi, I’m <span className="highlight">Jagjeet Singh</span>, a UI/UX Developer
                        specializing in <span className="highlight">Responsive Web & Frontend Development</span>.
                        I’m passionate about <em>creating user-centric and pixel-perfect digital experiences.</em>
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
                            <a href="www.linkedin.com/in/jagjeet-singh-b45a8731b"><FaLinkedinIn /></a>
                            <a href="https://github.com/Jagjeet02"><FaGithub /></a>
                            {/* <a href="#"><FaTwitter /></a> */}
                        </div>
                    </div>

                </div>
            </section>

            <section className="projects-section section" id="projects">
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

            <section className="experience-section section" id="experience">
                <div className="container">
                    <div className="section-header">
                        <h2>Experiences</h2>
                        <p>
                            A summary of the <span>Design, Development & User-Centric Solutions </span>
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

            <section className="skills-section section" id="skills">

                <div className="container">
                    <div className="section-header">
                        <h2>Skills & Expertise</h2>
                        <p>
                            Crafting digital experiences with
                            <span> modern technologies & best practices</span>
                        </p>
                    </div>

                    {/* Interactive category tabs */}
                    <div className="skill-categories">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span style={{ marginRight: '3px' }}>{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Skills grid */}
                    <div className="skills-grid">
                        {filteredSkills.map((group, index) => (
                            <div className="skill-card" key={index}>
                                <div className="card-header">
                                    <span className="skill-icon">{group.icon}</span>
                                    <h3>{group.title}</h3>
                                </div>

                                <ul className="skills-list">
                                    {group.skills.map((skill, idx) => (
                                        <li key={idx}>
                                            {skill.name}
                                            {/* Skill level indicator */}
                                            <div className="skill-level">
                                                {[1, 2, 3, 4, 5].map(level => (
                                                    <span
                                                        key={level}
                                                        className={`level-dot ${level <= skill.level ? 'active' : ''}`}
                                                    />
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="education-section section" id="education">
                <div className="container">
                    <div className="section-header">
                        <h2>Education</h2>
                        <p>
                            The academic journey that built my <span>technical foundation</span>
                        </p>
                    </div>

                    <div className="edu-timeline">

                        {/* B.Tech */}
                        <div className="edu-item">
                            <div className="edu-content">
                                <h3>B.Tech – Computer Science Engineering</h3>
                                <p className="institution">
                                    Guru Nanak Dev Engineering College, Ludhiana
                                </p>

                                <div className="edu-metrics">
                                    <div className="metric">
                                        <span>CGPA</span>
                                        <strong>7.8 / 10</strong>
                                    </div>
                                    <div className="metric">
                                        <span>Duration</span>
                                        <strong>2021 – 2025</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-dot"></div>
                        </div>

                        {/* 12th */}
                        <div className="edu-item">
                            <div className="edu-content">
                                <h3>Senior Secondary (12th)</h3>
                                <p className="institution">
                                    Govt. Sen. Sec. Smart School PAU, Ludhiana (PSEB)
                                </p>

                                <div className="edu-metrics">
                                    <div className="metric">
                                        <span>Percentage</span>
                                        <strong>84%</strong>
                                    </div>
                                    <div className="metric">
                                        <span>Year</span>
                                        <strong>2021</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-dot"></div>
                        </div>

                        {/* 10th */}
                        <div className="edu-item">
                            <div className="edu-content">
                                <h3>Matriculation (10th)</h3>
                                <p className="institution">
                                    Preet Gobind Model High School, Ludhiana (PSEB)
                                </p>

                                <div className="edu-metrics">
                                    <div className="metric">
                                        <span>Percentage</span>
                                        <strong>90%</strong>
                                    </div>
                                    <div className="metric">
                                        <span>Year</span>
                                        <strong>2019</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-dot"></div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="certificate-section section" id="certification">
                <div className="container">
                    <div className="section-header">
                        <h2>Certification</h2>
                        <p>
                            Professional training in
                            <span> MERN Stack Development</span>
                        </p>
                    </div>

                    <div className="certificate-wrapper">

                        {/* LEFT CONTENT */}
                        <div className="certificate-content">
                            <h3>Solitaire Infosys Pvt. Ltd.</h3>
                            <span className="badge">MERN Stack Trainee</span>

                            <p className="certificate-duration">
                                January 2025 – May 2025
                            </p>

                            <p className="certificate-description">
                                Completed a 6-month industrial training program in MERN Stack Development
                                with primary focus on frontend engineering and UI/UX implementation.
                                Built responsive and interactive web interfaces using React.js while
                                following modern design principles and performance best practices.
                            </p>

                            <ul className="certificate-points">
                                <li>Designed and developed responsive user interfaces using React.js</li>
                                <li>Converted UI designs into pixel-perfect, production-ready components</li>
                                <li>Implemented reusable component-based architecture</li>
                                <li>Applied modern CSS techniques (Flexbox, Grid, SCSS) for layout design</li>
                                <li>Ensured cross-browser compatibility and accessibility standards</li>
                                <li>Worked with basic REST API integration for dynamic data handling</li>
                            </ul>
                        </div>


                        {/* Vertical Divider */}
                        <div className="certificate-divider"></div>

                        {/* RIGHT IMAGE */}
                        <div className="certificate-image">
                            <img src={certificate} alt="MERN Certificate" />
                        </div>

                    </div>
                </div>
            </section>

            <section className="contact-section section" id="contact">
                <div className="container">
                    <div className="section-header">
                        <h2>Let’s Connect</h2>
                        <p>
                            Have a project in mind or want to collaborate?
                            <span> Let’s build something great.</span>
                        </p>
                    </div>

                    <div className="contact-wrapper">

                        {/* LEFT INFO */}
                        <div className="contact-info">
                            <h3>Get in Touch</h3>

                            <div className="info-item">
                                <span>Email</span>
                                <p>jagjeetpanesar000@gmail.com</p>
                            </div>

                            <div className="info-item">
                                <span>Phone</span>
                                <p>+91 8360170678</p>
                            </div>

                            <div className="info-item">
                                <span>Location</span>
                                <p>Mohali, Punjab, India</p>
                            </div>

                            {/* <div className="social-links">
                                <a href="#">LinkedIn</a>
                                <a href="#">GitHub</a>
                                <a href="#">Portfolio</a>
                            </div> */}
                        </div>

                        {/* RIGHT FORM */}
                        <div className="contact-form">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>

                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>

                                <div className="form-group">
                                    <textarea rows="5" placeholder="Your Message" required />
                                </div>

                                <button type="submit" className="btn primary">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection