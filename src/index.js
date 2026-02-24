        // Data for the portfolio
        const projectsData = [
            {
                id: 1,
                title: "E-commerce Dashboard UI",
                type: "ui-design",
                category: "Figma Design",
                description: "Modern e-commerce dashboard with analytics, user management, and inventory tracking system.",
                tech: ["Figma", "UI/UX Design", "Prototyping"],
                image: "/images/project1.jpg"
            },
            {
                id: 2,
                title: "Portfolio Website",
                type: "ui-development",
                category: "HTML Development",
                description: "Fully responsive portfolio website built with pure HTML, SCSS, and JavaScript.",
                tech: ["HTML", "SCSS", "JavaScript"],
                image: "/images/project2.jpg"
            },
            {
                id: 3,
                title: "Task Management App",
                type: "interactive",
                category: "Next.js Development",
                description: "Interactive task management application with real-time updates and drag-drop functionality.",
                tech: ["Next.js", "React", "Tailwind", "Firebase"],
                image: "/images/project3.jpg"
            },
            {
                id: 4,
                title: "Travel Booking Platform",
                type: "ui-design",
                category: "Figma Design",
                description: "Complete travel booking platform UI/UX design with booking flow and payment integration.",
                tech: ["Figma", "UI/UX Design", "Wireframing"],
                image: "/images/project4.jpg"
            },
            {
                id: 5,
                title: "Restaurant Website",
                type: "ui-development",
                category: "HTML Development",
                description: "Fully responsive restaurant website with online menu, reservation system, and gallery.",
                tech: ["HTML", "Bootstrap", "JavaScript", "CSS"],
                image: "/images/project5.jpg"
            },
            {
                id: 6,
                title: "Social Media Dashboard",
                type: "interactive",
                category: "Next.js Development",
                description: "Interactive dashboard for social media analytics with real-time data visualization.",
                tech: ["Next.js", "Chart.js", "SCSS", "API Integration"],
                image: "/images/project6.jpg"
            }
        ];

        const skillsData = [
            { name: 'HTML', level: 95, category: 'frontend' },
            { name: 'CSS', level: 90, category: 'frontend' },
            { name: 'SCSS', level: 85, category: 'frontend' },
            { name: 'LESS', level: 80, category: 'frontend' },
            { name: 'Bootstrap', level: 88, category: 'frontend' },
            { name: 'Tailwind', level: 82, category: 'frontend' },
            { name: 'JavaScript', level: 85, category: 'frontend' },
            { name: 'React', level: 80, category: 'frontend' },
            { name: 'Next.js', level: 75, category: 'frontend' }
        ];

        const educationData = [
            {
                degree: "Bachelor of Technology in Computer Science",
                institution: "GNDEC Ludhiana",
                duration: "2021 - 2025",
                score: "7.1 CGPA",
                description: "Currently pursuing B.Tech in Computer Science Engineering with focus on web technologies and software development."
            },
            {
                degree: "12th Grade",
                institution: "GSSSS, PAU Ludhiana",
                duration: "2020 - 2021",
                score: "83.6%",
                description: "Completed senior secondary education with focus on science stream including Physics, Chemistry, and Mathematics."
            },
            {
                degree: "10th Grade",
                institution: "PGMS School",
                duration: "2018 - 2019",
                score: "90%",
                description: "Completed secondary education with excellent academic performance and participation in extracurricular activities."
            }
        ];

        const trainingData = [
            {
                role: "UI/UX Intern",
                company: "Sourcemash Technology",
                duration: "2nd June - Present",
                description: [
                    "Working on real-world UI/UX design projects for client applications",
                    "Creating wireframes, mockups, and interactive prototypes",
                    "Collaborating with development teams to implement designs",
                    "Learning industry-standard design tools and processes",
                    "Conducting user research and usability testing"
                ]
            },
            {
                role: "MERN Stack Training",
                company: "Solitaire Infosystem",
                duration: "Jan 2025 - Jun 2025",
                description: [
                    "Comprehensive training in MongoDB, Express.js, React, and Node.js",
                    "Building full-stack web applications from concept to deployment",
                    "Learning backend development, REST APIs, and database management",
                    "Working on capstone projects and real-world scenarios",
                    "Understanding software development lifecycle and best practices"
                ]
            }
        ];

        // Initialize the portfolio
        document.addEventListener('DOMContentLoaded', function() {
            initializeHeader();
            renderProjects();
            renderSkills();
            renderEducation();
            renderTraining();
            setupFilterButtons();
            setupAnimations();
        });

        // Header functionality
        function initializeHeader() {
            const header = document.getElementById('header');
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');

            // Scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile menu toggle
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close mobile menu when clicking on links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        }

        // Render projects
        function renderProjects() {
            const projectsGrid = document.getElementById('projectsGrid');
            projectsGrid.innerHTML = '';

            projectsData.forEach((project, index) => {
                const projectElement = document.createElement('div');
                projectElement.className = `project-card fade-in-up`;
                projectElement.style.animationDelay = `${index * 0.1}s`;
                projectElement.setAttribute('data-type', project.type);

                projectElement.innerHTML = `
                    <div class="project-image">
                        <div class="image-placeholder"></div>
                        <div class="project-overlay">
                            <span class="project-category">${project.category}</span>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tech-stack">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                `;

                projectsGrid.appendChild(projectElement);
            });
        }

        // Render skills
        function renderSkills() {
            const skillsGrid = document.getElementById('skillsGrid');
            skillsGrid.innerHTML = '';

            skillsData.forEach((skill, index) => {
                const skillElement = document.createElement('div');
                skillElement.className = 'skill-item fade-in-up';
                skillElement.style.animationDelay = `${index * 0.1}s`;

                skillElement.innerHTML = `
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                `;

                skillsGrid.appendChild(skillElement);
            });
        }

        // Render education
        function renderEducation() {
            const educationTimeline = document.getElementById('educationTimeline');
            educationTimeline.innerHTML = '';

            educationData.forEach((edu, index) => {
                const educationElement = document.createElement('div');
                educationElement.className = 'timeline-item fade-in-up';
                educationElement.style.animationDelay = `${index * 0.2}s`;

                educationElement.innerHTML = `
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3>${edu.degree}</h3>
                        <h4>${edu.institution}</h4>
                        <div class="timeline-meta">
                            <span class="duration">${edu.duration}</span>
                            <span class="score">${edu.score}</span>
                        </div>
                        <p>${edu.description}</p>
                    </div>
                `;

                educationTimeline.appendChild(educationElement);
            });
        }

        // Render training
        function renderTraining() {
            const trainingGrid = document.getElementById('trainingGrid');
            trainingGrid.innerHTML = '';

            trainingData.forEach((train, index) => {
                const trainingElement = document.createElement('div');
                trainingElement.className = 'training-card fade-in-up';
                trainingElement.style.animationDelay = `${index * 0.2}s`;

                trainingElement.innerHTML = `
                    <div class="card-header">
                        <h3>${train.role}</h3>
                        <h4>${train.company}</h4>
                        <span class="training-duration">${train.duration}</span>
                    </div>
                    
                    <div class="card-body">
                        <ul class="responsibilities">
                            ${train.description.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="card-footer">
                        <div class="status">
                            ${train.duration.includes('Present') ? '<span class="current">Current</span>' : ''}
                        </div>
                    </div>
                `;

                trainingGrid.appendChild(trainingElement);
            });
        }

        // Setup project filter buttons
        function setupFilterButtons() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');

                    projectCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-type') === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }

        // Setup scroll animations
        function setupAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all elements with fade-in-up class
            document.querySelectorAll('.fade-in-up').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(el);
            });
        }