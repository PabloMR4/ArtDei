// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Header Background on Scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }

    lastScroll = currentScroll;
});

// Admin Panel Toggle (only for admin page)
const adminToggle = document.getElementById('adminToggle');
const adminPanel = document.getElementById('adminPanel');

if (adminToggle && adminPanel) {
    let isAdminMode = false;

    adminToggle.addEventListener('click', () => {
        isAdminMode = !isAdminMode;
        adminPanel.style.display = isAdminMode ? 'block' : 'none';
        adminToggle.textContent = isAdminMode ? 'Cerrar Admin' : 'Modo Admin';

        // Show/hide delete buttons
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(btn => {
            btn.style.display = isAdminMode ? 'block' : 'none';
        });
    });
}

// Project Management System
class ProjectManager {
    constructor() {
        this.projects = this.loadProjects();
        this.initializeDeleteButtons();
    }

    loadProjects() {
        const stored = localStorage.getItem('artdei_projects');
        return stored ? JSON.parse(stored) : [];
    }

    saveProjects() {
        localStorage.setItem('artdei_projects', JSON.stringify(this.projects));
    }

    addProject(title, description, imagesData) {
        const project = {
            id: Date.now(),
            title,
            description,
            images: Array.isArray(imagesData) ? imagesData : [imagesData],
            image: Array.isArray(imagesData) ? imagesData[0] : imagesData, // backwards compatibility
            createdAt: new Date().toISOString()
        };

        this.projects.push(project);
        this.saveProjects();
        this.renderProject(project);
    }

    deleteProject(id) {
        this.projects = this.projects.filter(p => p.id !== id);
        this.saveProjects();
        const card = document.querySelector(`[data-project-id="${id}"]`);
        if (card) {
            card.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => card.remove(), 300);
        }
    }

    renderProject(project) {
        const projectsGrid = document.getElementById('projectsGrid');
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project-id', project.id);

        const images = Array.isArray(project.images) ? project.images : [project.image];
        const hasMultipleImages = images.length > 1;

        card.innerHTML = `
            <div class="project-image">
                ${hasMultipleImages ? `
                    <div class="image-carousel" data-current="0">
                        ${images.map((img, idx) => `
                            <img src="${img}" alt="${project.title}" class="carousel-image" style="display: ${idx === 0 ? 'block' : 'none'};">
                        `).join('')}
                        <button class="carousel-prev" onclick="projectManager.prevImage(${project.id})">‹</button>
                        <button class="carousel-next" onclick="projectManager.nextImage(${project.id})">›</button>
                        <div class="carousel-indicators">
                            ${images.map((_, idx) => `<span class="indicator ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`).join('')}
                        </div>
                    </div>
                ` : `
                    <img src="${images[0]}" alt="${project.title}">
                `}
                <div class="project-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
            <button class="delete-button" style="display: none;" onclick="projectManager.deleteProject(${project.id})">
                Eliminar
            </button>
        `;

        projectsGrid.appendChild(card);

        // Animate in
        card.style.animation = 'fadeInUp 0.5s ease';
    }

    prevImage(projectId) {
        const card = document.querySelector(`[data-project-id="${projectId}"]`);
        const carousel = card.querySelector('.image-carousel');
        const images = carousel.querySelectorAll('.carousel-image');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentIndex = parseInt(carousel.dataset.current);

        images[currentIndex].style.display = 'none';
        indicators[currentIndex].classList.remove('active');

        currentIndex = (currentIndex - 1 + images.length) % images.length;

        images[currentIndex].style.display = 'block';
        indicators[currentIndex].classList.add('active');
        carousel.dataset.current = currentIndex;
    }

    nextImage(projectId) {
        const card = document.querySelector(`[data-project-id="${projectId}"]`);
        const carousel = card.querySelector('.image-carousel');
        const images = carousel.querySelectorAll('.carousel-image');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentIndex = parseInt(carousel.dataset.current);

        images[currentIndex].style.display = 'none';
        indicators[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].style.display = 'block';
        indicators[currentIndex].classList.add('active');
        carousel.dataset.current = currentIndex;
    }

    renderAllProjects() {
        this.projects.forEach(project => this.renderProject(project));
    }

    initializeDeleteButtons() {
        // Add delete buttons to sample projects if needed
        const existingCards = document.querySelectorAll('.project-card:not([data-project-id])');
        existingCards.forEach((card, index) => {
            if (!card.querySelector('.delete-button')) {
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-button';
                deleteBtn.textContent = 'Eliminar';
                deleteBtn.style.display = 'none';
                deleteBtn.onclick = () => card.remove();
                card.appendChild(deleteBtn);
            }
        });
    }
}

// Initialize Project Manager
const projectManager = new ProjectManager();

// Render saved projects on load
window.addEventListener('DOMContentLoaded', () => {
    projectManager.renderAllProjects();
});

// Add Project Form Handler
const addProjectForm = document.getElementById('addProjectForm');
if (addProjectForm) {
    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('projectTitle').value;
        const description = document.getElementById('projectDescription').value;
        const imageFiles = document.getElementById('projectImage').files;

        if (imageFiles.length > 0) {
            const imagesData = [];
            let loadedCount = 0;

            Array.from(imageFiles).forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagesData[index] = e.target.result;
                    loadedCount++;

                    // When all images are loaded
                    if (loadedCount === imageFiles.length) {
                        projectManager.addProject(title, description, imagesData);
                        addProjectForm.reset();
                        document.getElementById('imagePreview').innerHTML = '';
                        alert(`Proyecto agregado exitosamente con ${imagesData.length} imagen${imagesData.length > 1 ? 'es' : ''}`);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    });
}

// Contact Form Handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    contactForm.reset();
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .about-text, .contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.8);
        }
    }
`;
document.head.appendChild(style);