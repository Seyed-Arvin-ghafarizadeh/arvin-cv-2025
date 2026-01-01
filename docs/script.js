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

    // ... rest of your 365-line JavaScript ...
});

