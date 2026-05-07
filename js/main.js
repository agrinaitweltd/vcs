// ========================================
// Navigation & Menu Functions
// ========================================

// Sticky Navigation
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for shadow effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Dropdown toggle for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Scroll to Top Button
// ========================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Eligibility Form Handler
// ========================================
const eligibilityForm = document.getElementById('eligibilityForm');

if (eligibilityForm) {
    eligibilityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(eligibilityForm);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Check if all required fields are "yes"
        const allYes = data.age === 'yes' && 
                       data.education === 'yes' && 
                       data.job === 'yes' && 
                       data.bank === 'yes';
        
        if (allYes) {
            alert('Congratulations! You meet all eligibility requirements. Redirecting to booking page...');
            setTimeout(() => {
                window.location.href = 'booking.html';
            }, 1500);
        } else {
            alert('Unfortunately, you do not meet all the current eligibility requirements. Please contact us for personalized guidance.');
        }
    });
}

// ========================================
// Immigration Pathways Slider
// ========================================
class PathwaySlider {
    constructor() {
        this.slides = document.querySelectorAll('.pathway-slide');
        this.dots = document.querySelectorAll('.pathway-dots .dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Dot click events
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetInterval();
            });
        });
        
        // Start auto-play
        this.startAutoPlay();
        
        // Pause on hover
        const sliderContainer = document.querySelector('.pathways-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
            sliderContainer.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }
    
    goToSlide(index) {
        // Remove active class from all
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }
    
    startAutoPlay() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
    
    resetInterval() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PathwaySlider();
});

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .step, .about-agency-wrapper > div');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// Counter Animation
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Observe counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(counter => {
    counterObserver.observe(counter);
});

// ========================================
// Form Validation Helper
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}

// ========================================
// Page Load Animation
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Accessibility Enhancements
// ========================================

// Keyboard navigation for dropdowns
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const trigger = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (trigger && menu) {
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
});

// Focus trap for mobile menu
const focusableElements = 'a[href], button, textarea, input, select';

function trapFocus(element) {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusable = focusableContent[0];
    const lastFocusable = focusableContent[focusableContent.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
        
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
            mobileMenuToggle.focus();
        }
    });
}

if (navMenu) {
    trapFocus(navMenu);
}

// ========================================
// Lazy Loading Images
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Analytics & Tracking (Placeholder)
// ========================================
function trackEvent(category, action, label = '') {
    // Placeholder for Google Analytics or other tracking
    console.log('Event:', category, action, label);
    
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track important interactions
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'Click', btn.textContent.trim());
    });
});

// ========================================
// Print Styles Handler
// ========================================
window.addEventListener('beforeprint', () => {
    // Expand all collapsed content before printing
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'block';
    });
});

window.addEventListener('afterprint', () => {
    // Reset after printing
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = '';
    });
});

// ========================================
// Performance Monitoring
// ========================================
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
                console.warn('Long task detected:', entry.name, entry.duration);
            }
        }
    });
    
    observer.observe({ entryTypes: ['measure', 'navigation'] });
}

// ========================================
// Service Worker Registration (for PWA)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

console.log('Vantedge Immigration Consultants - Website Loaded Successfully');
