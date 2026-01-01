// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (nav) {
            if (currentScroll > 300) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        lastScroll = currentScroll;
    });

    // Skills Data
    const skillsData = {
        backend: [
            { name: 'Flask', icon: 'server' },
            { name: 'Django', icon: 'server' },
            { name: 'FastAPI', icon: 'server' },
            { name: 'Git', icon: 'git-branch' },
            { name: 'Docker', icon: 'box' },
            { name: 'Web scraping', icon: 'code' },
            { name: 'Automation', icon: 'code' },
        ],
        ai: [
            { name: 'Prompt Engineering', icon: 'brain' },
            { name: 'Agentic-AI', icon: 'bot' },
            { name: 'RAG - LLM', icon: 'brain' },
            { name: 'WorkFlow design', icon: 'brain' },
            { name: 'Pytorch/Tensorflow', icon: 'code' },
            { name: 'NLP & Computer Vision', icon: 'monitor' },
            { name: 'VectorDB, postgresql', icon: 'database' },
        ],
        dev: [
            { name: 'VSCode', icon: 'laptop' },
            { name: 'Cursor', icon: 'laptop' },
            { name: 'Google Colab', icon: 'monitor' },
            { name: 'Jupyter Notebook', icon: 'monitor' },
            { name: 'Git-Docker', icon: 'git-branch' },
        ]
    };

    // Render Skills
    function renderSkills() {
        Object.keys(skillsData).forEach(category => {
            const container = document.querySelector(`.skill-pills[data-category="${category}"]`);
            if (!container) return;

            skillsData[category].forEach((skill, index) => {
                const pill = document.createElement('span');
                pill.className = 'skill-pill fade-in-up';
                pill.style.animationDelay = `${index * 50}ms`;
                pill.innerHTML = `<i data-lucide="${skill.icon}"></i>${skill.name}`;
                container.appendChild(pill);
            });
        });
        lucide.createIcons();
    }

    // Education Data
    const educationData = [
        {
            degree: "Master's in Communication Systems",
            university: "University of Shahid Chamran—Ahvaz",
            year: "2020",
            thesis: "Implementing OCR on Persian DataSet Applying customized CNN from scratch",
            location: "Ahvaz, Iran",
        },
        {
            degree: "Bachelor in Electronics",
            university: "University of Shahid Chamran—Ahvaz",
            year: "2016",
            thesis: "Implementing Face Detection using Open-CV",
            location: "Ahvaz, Iran",
        }
    ];

    // Render Education
    function renderEducation() {
        const timeline = document.querySelector('.timeline-green');
        if (!timeline) return;

        educationData.forEach((edu, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item fade-in-up';
            item.style.animationDelay = `${index * 150}ms`;
            item.innerHTML = `
                <div class="timeline-icon">
                    <i data-lucide="graduation-cap"></i>
                </div>
                <div class="timeline-content">
                    <h3 class="timeline-title">${edu.degree}</h3>
                    <div>
                        <span class="timeline-company">${edu.university}</span>
                    </div>
                    <div class="timeline-meta">
                        <span><i data-lucide="calendar"></i> ${edu.year}</span>
                        ${edu.location ? `<span><i data-lucide="map-pin"></i> ${edu.location}</span>` : ''}
                    </div>
                    ${edu.thesis ? `
                        <div class="timeline-thesis">
                            <strong>Thesis:</strong> ${edu.thesis}
                        </div>
                    ` : ''}
                </div>
            `;
            timeline.appendChild(item);
        });
        lucide.createIcons();
    }

    // Experience Data
    const experienceData = [
        {
            title: "AI Engineer",
            company: "Raymond Rayan Pardazan",
            period: "June 2024 – November 2024",
            location: "Tehran, Iran",
            description: [
                "Developed and deployed LLM-based systems for various industrial applications.",
                "Designed and implemented AI agents for automation and intelligent decision-making.",
                "Contributed to the full software development lifecycle, from concept to deployment.",
            ]
        },
        {
            title: "Freelance AI Engineer",
            company: "Self-Employed",
            period: "December 2023 – May 2024",
            location: "Remote",
            description: [
                "Provided consulting and development services for AI and machine learning projects.",
                "Built custom AI solutions, including RAG systems and NLP models.",
                "Managed client relationships and project delivery.",
            ]
        },
        {
            title: "Python & Machine Learning Instructor",
            company: "NetCollege Institute",
            period: "June 2023 – September 2023",
            location: "Tehran, Iran",
            description: [
                "Taught Python programming, machine learning, and data science concepts to students.",
                "Developed course materials and practical exercises.",
                "Mentored students in their projects and career development.",
            ]
        },
        {
            title: "Data Analyst",
            company: "FARAFAN",
            period: "August 2022 – April 2023",
            location: "Tehran, Iran",
            description: [
                "Performed data collection, cleaning, and analysis to support business decisions.",
                "Developed dashboards and reports using data visualization tools.",
                "Contributed to optimizing data pipelines and improving data quality.",
            ]
        }
    ];

    // Render Experience
    function renderExperience() {
        const timeline = document.querySelector('.timeline-blue');
        if (!timeline) return;

        experienceData.forEach((exp, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item fade-in-up';
            item.style.animationDelay = `${index * 150}ms`;
            item.innerHTML = `
                <div class="timeline-icon">
                    <i data-lucide="briefcase"></i>
                </div>
                <div class="timeline-content">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <div>
                        <span class="timeline-company">${exp.company}</span>
                    </div>
                    <div class="timeline-meta">
                        <span><i data-lucide="calendar"></i> ${exp.period}</span>
                        ${exp.location ? `<span><i data-lucide="map-pin"></i> ${exp.location}</span>` : ''}
                    </div>
                    <ul class="timeline-description">
                        ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                </div>
            `;
            timeline.appendChild(item);
        });
        lucide.createIcons();
    }

    // Projects Data
    const projectsData = [
        {
            title: "Smart Document QA Assistant",
            description: "Developed an intelligent assistant capable of answering complex queries from various document types using advanced NLP and LLM techniques. Features RAG implementation for enhanced accuracy.",
            technologies: ["Python", "LLM", "NLP", "RAG", "FastAPI", "VectorDB"],
            githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Smart-Document-QA-Assistant",
            icon: "sparkles",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "AI Smart Contract / DeFi Auditor & Advisor Agent",
            description: "An AI agent designed to audit smart contracts and provide DeFi advisory, identifying vulnerabilities and optimizing strategies. Powered by advanced AI reasoning capabilities.",
            technologies: ["Python", "AI Agents", "Solidity", "Web3", "LLM"],
            githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/AI-Smart-Contract-DeFi-Auditor-Advisor-Agent",
            icon: "shield",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Face Recognition System",
            description: "Built a real-time face recognition system with high accuracy, suitable for security and attendance applications. Utilizes deep learning models for robust performance.",
            technologies: ["Python", "OpenCV", "Deep Learning", "Dlib", "CNN"],
            githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Face-Recognition-System",
            icon: "eye",
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "AI-powered Monitoring System",
            description: "A system that uses AI to monitor various metrics and alert on anomalies, ensuring system stability and performance. Features predictive analytics and automated alerting.",
            technologies: ["Python", "Machine Learning", "Data Science", "Monitoring", "Time Series"],
            githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/AI-powered-Monitoring-System",
            icon: "monitor",
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Persian OCR System",
            description: "Developed an OCR system specifically for Persian text, achieving high accuracy on diverse datasets. Custom CNN architecture trained from scratch for optimal performance.",
            technologies: ["Python", "OCR", "CNN", "Image Processing", "Pytorch"],
            githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Persian-OCR-System",
            icon: "scan",
            gradient: "from-indigo-500 to-purple-500",
        },
        {
            title: "Real-time Face Detection",
            description: "Implemented a real-time face detection application with various algorithms for robust performance. Optimized for speed and accuracy in different lighting conditions.",
            technologies: ["Python", "OpenCV", "Computer Vision", "Real-time Processing"],
            githubUrl: "https://github.com/SEYED-ARVIN-GHAFARIZADEH/Real-time-Face-Detection",
            icon: "zap",
            gradient: "from-yellow-500 to-orange-500",
        },
    ];

    // Gradient mapping for CSS
    const gradientMap = {
        "from-purple-500 to-pink-500": "linear-gradient(to right, #a855f7, #ec4899)",
        "from-blue-500 to-cyan-500": "linear-gradient(to right, #3b82f6, #06b6d4)",
        "from-green-500 to-emerald-500": "linear-gradient(to right, #22c55e, #10b981)",
        "from-orange-500 to-red-500": "linear-gradient(to right, #f97316, #ef4444)",
        "from-indigo-500 to-purple-500": "linear-gradient(to right, #6366f1, #a855f7)",
        "from-yellow-500 to-orange-500": "linear-gradient(to right, #eab308, #f97316)",
    };

    // Render Projects
    function renderProjects() {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;

        projectsData.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card fade-in-up';
            card.style.animationDelay = `${index * 100}ms`;
            const gradientStyle = gradientMap[project.gradient] || gradientMap["from-blue-500 to-cyan-500"];
            card.innerHTML = `
                <div class="project-gradient" style="background: ${gradientStyle};"></div>
                <div class="project-header">
                    <div class="project-icon-wrapper">
                        <div class="project-icon" style="background: ${gradientStyle};">
                            <i data-lucide="${project.icon}"></i>
                        </div>
                    </div>
                    <div class="project-header-content">
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                </div>
                <div class="project-content">
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i data-lucide="github"></i>
                            <span>Code</span>
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        lucide.createIcons();
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections (except hero which should be visible immediately)
    document.querySelectorAll('section:not(.hero-section)').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });

    // Initialize all renders
    renderSkills();
    renderEducation();
    renderExperience();
    renderProjects();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

