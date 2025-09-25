// Global Variables
let currentSkillIndex = 0;
let isMobileMenuOpen = false;
let isLoading = true;

// Skills for rotation
const skills = [
    "JavaScript Developer",
    "Python Engineer", 
    "React Specialist",
    "Full-Stack Developer",
    "System Designer"
];

// Tech stack data
const technologies = [
    { name: "HTML5", skill: 90 },
    { name: "CSS3", skill: 85 },
    { name: "JavaScript", skill: 95 },
    { name: "TypeScript", skill: 88 },
    { name: "Python", skill: 92 },
    { name: "Java", skill: 85 },
    { name: "React", skill: 90 },
    { name: "Next.js", skill: 80 },
    { name: "Node.js", skill: 88 },
    { name: "Express", skill: 85 },
    { name: "Ruby on Rails", skill: 75 },
    { name: "PHP", skill: 70 },
    { name: "MongoDB", skill: 82 },
    { name: "PostgreSQL", skill: 80 },
    { name: "AWS", skill: 78 },
    { name: "Docker", skill: 75 },
    { name: "Git", skill: 95 },
    { name: "Firebase", skill: 82 }
];

// Tech icons mapping
const techIcons = {
    "HTML5": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`,
    "CSS3": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 3-3 3-3-3z"/><path d="M8 21l-2-2 2-2 2 2z"/><path d="M16 21l2-2-2-2-2 2z"/></svg>`,
    "JavaScript": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    "TypeScript": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`,
    "Python": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    "Java": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    "React": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" x2="12" y1="8" y2="8"/><line x1="3.95" x2="8.54" y1="6.06" y2="14"/><line x1="10.88" x2="15.46" y1="21.94" y2="14"/></svg>`,
    "Next.js": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" x2="12" y1="8" y2="8"/><line x1="3.95" x2="8.54" y1="6.06" y2="14"/><line x1="10.88" x2="15.46" y1="21.94" y2="14"/></svg>`,
    "Node.js": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M6 15v2c0 .6.4 1 1 1h2m8-3v2c0 .6-.4 1-1 1h-2m4-5H4"/></svg>`,
    "Express": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M6 15v2c0 .6.4 1 1 1h2m8-3v2c0 .6-.4 1-1 1h-2m4-5H4"/></svg>`,
    "Ruby on Rails": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M6 15v2c0 .6.4 1 1 1h2m8-3v2c0 .6-.4 1-1 1h-2m4-5H4"/></svg>`,
    "PHP": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M6 15v2c0 .6.4 1 1 1h2m8-3v2c0 .6-.4 1-1 1h-2m4-5H4"/></svg>`,
    "MongoDB": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>`,
    "PostgreSQL": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>`,
    "AWS": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="M8 17l4-4 4 4"/></svg>`,
    "Docker": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"/><path d="M12 2v20"/></svg>`,
    "Git": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
    "Firebase": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="M8 17l4-4 4 4"/></svg>`
};

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            isLoading = false;
        }, 500);
    }
}

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.body.classList.toggle('light', savedTheme === 'light');
    } else if (!prefersDark) {
        document.body.classList.add('light');
    }
    
    updateThemeToggle();
}

function toggleTheme() {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeToggle();
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const isLight = document.body.classList.contains('light');
    
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    }
}

// Navigation
function handleScroll() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.scrollY > 50;
    
    if (navbar) {
        navbar.classList.toggle('scrolled', scrolled);
    }
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Add fade effect
        document.body.style.opacity = '0.7';
        
        // Scroll to section
        element.scrollIntoView({
            behavior: "smooth"
        });
        
        // Remove fade effect
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 300);
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('open', isMobileMenuOpen);
    }
    
    if (mobileMenuButton) {
        mobileMenuButton.classList.toggle('open', isMobileMenuOpen);
    }
}

// Skills Rotation
function rotateSkills() {
    const skillElement = document.getElementById('rotating-skill');
    if (skillElement) {
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        skillElement.textContent = skills[currentSkillIndex];
    }
}

// Tech Stack
function createTechCard(tech, index) {
    const icon = techIcons[tech.name] || techIcons["JavaScript"]; // Fallback icon
    
    return `
        <div class="tech-card" data-index="${index}">
            <div class="tech-icon">${icon}</div>
            <div class="tech-name">${tech.name}</div>
            <div class="skill-progress">
                <div class="skill-progress-header">
                    <span></span>
                    <span>${tech.skill}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%;" data-width="${tech.skill}%"></div>
                </div>
            </div>
        </div>
    `;
}

function initTechStack() {
    const techSlider = document.getElementById('tech-slider');
    if (techSlider) {
        // Create duplicated array for seamless infinite scroll
        const duplicatedTech = [...technologies, ...technologies];
        
        // Generate HTML for all tech cards
        const techHTML = duplicatedTech.map((tech, index) => createTechCard(tech, index)).join('');
        techSlider.innerHTML = techHTML;
        
        // Animate progress bars with delay
        setTimeout(() => {
            const progressBars = techSlider.querySelectorAll('.progress-fill');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                }, index * 100);
            });
        }, 1000);
    }
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}

// Event Listeners Setup
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Scroll event
    window.addEventListener('scroll', debounce(handleScroll, 10));
    
    // Resize event
    window.addEventListener('resize', debounce(() => {
        // Close mobile menu on resize
        if (window.innerWidth >= 768 && isMobileMenuOpen) {
            toggleMobileMenu();
        }
    }, 100));
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        
        if (isMobileMenuOpen && 
            mobileMenu && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target)) {
            toggleMobileMenu();
        }
    });
    
    // Prevent mobile menu close when clicking inside menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// Keyboard accessibility
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile menu
        if (e.key === 'Escape' && isMobileMenuOpen) {
            toggleMobileMenu();
        }
        
        // Enter/Space for theme toggle
        if ((e.key === 'Enter' || e.key === ' ') && e.target.id === 'theme-toggle') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// Initialize everything when DOM is loaded
function init() {
    // Initialize theme first
    initTheme();
    
    // Setup all event listeners
    setupEventListeners();
    
    // Initialize components
    initTechStack();
    initIntersectionObserver();
    initSmoothScrolling();
    initKeyboardNavigation();
    
    // Start skills rotation
    setInterval(rotateSkills, 3000);
    
    // Hide loading screen after a brief delay
    setTimeout(hideLoadingScreen, 1500);
    
    // Initialize scroll position
    handleScroll();
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make functions globally available for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.toggleTheme = toggleTheme;