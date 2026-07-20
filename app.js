/* ==========================================================================
   AURA & GOLD - LUXURY EVENT MANAGEMENT JAVASCRIPT ENGINE
   ========================================================================== */

// 16 Services Dataset
const SERVICES = [
    {
        id: 'service-1',
        title: 'Wedding Planning',
        category: 'Weddings',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
        desc: 'Bespoke end-to-end wedding design, floral curation, timeline management, and regal celebrations tailored to your personal love story.'
    },
    {
        id: 'service-2',
        title: 'Destination Weddings',
        category: 'Weddings',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
        desc: 'Seamless luxury travel coordination, exotic venue procurement, and multi-day celebrations in Europe, Asia, and tropical paradises.'
    },
    {
        id: 'service-3',
        title: 'Engagement Ceremonies',
        category: 'Weddings',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
        desc: 'Intimate ring ceremonies and lavish engagement galas designed with exquisite champagne styling and candlelit ambience.'
    },
    {
        id: 'service-4',
        title: 'Birthday Parties',
        category: 'Private Events',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
        desc: 'Milestone birthdays, glamorous masquerades, and themed celebrations crafted with custom cocktail bars and live DJs.'
    },
    {
        id: 'service-5',
        title: 'Corporate Events',
        category: 'Corporate',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        desc: 'High-profile executive summits, annual banquets, and award galas designed for prestige, brand authority, and flawless flow.'
    },
    {
        id: 'service-6',
        title: 'Product Launches',
        category: 'Corporate',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
        desc: 'High-impact press launches, interactive brand activations, and immersive multimedia reveals for global luxury brands.'
    },
    {
        id: 'service-7',
        title: 'Live Shows',
        category: 'Concerts',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
        desc: 'Spectacular live theatrical performances, laser light shows, and pyrotechnic productions engineered for maximum awe.'
    },
    {
        id: 'service-8',
        title: 'Concerts',
        category: 'Concerts',
        image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
        desc: 'Arena and festival scale production, crowd management, sound staging, and VIP artist hospitality management.'
    },
    {
        id: 'service-9',
        title: 'Decor & Styling',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
        desc: 'Opulent floral arches, gold crystal chandeliers, velvet draping, and bespoke tabletop design curated by master stylists.'
    },
    {
        id: 'service-10',
        title: 'Stage Design',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
        desc: 'Custom architectural stages, 3D projection mapping, LED video walls, and runway designs built to command attention.'
    },
    {
        id: 'service-11',
        title: 'Photography & Videography',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
        desc: 'Award-winning cinematic videography, 4K drone aerial shots, and editorial photojournalism capturing every emotion.'
    },
    {
        id: 'service-12',
        title: 'Entertainment Management',
        category: 'Concerts',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
        desc: 'Curated lineups of international orchestra ensembles, aerial acrobats, illusionists, and celebrity performers.'
    },
    {
        id: 'service-13',
        title: 'Artist Management',
        category: 'Concerts',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
        desc: 'Contract negotiation, backstage greenroom logistics, security detail, and liaison for top-tier musical acts.'
    },
    {
        id: 'service-14',
        title: 'Sound & Lighting',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
        desc: 'Concert-grade line array acoustic systems, intelligent kinetic moving lights, and atmospheric haze FX.'
    },
    {
        id: 'service-15',
        title: 'Catering Coordination',
        category: 'Hospitality',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
        desc: 'Michelin-starred multi-course menus, sommelier wine pairings, molecular mixology, and white-glove table service.'
    },
    {
        id: 'service-16',
        title: 'Venue Selection',
        category: 'Hospitality',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        desc: 'Exclusive access to historical castles, private beachfront estates, luxury penthouse ballrooms, and secret garden estates.'
    }
];

// Gallery Portfolio Dataset
const GALLERY = [
    {
        id: 'g-1',
        title: 'Royal Palace Destination Wedding',
        category: 'weddings',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-2',
        title: 'Global Tech Leadership Gala',
        category: 'corporate',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-3',
        title: 'Gold & Floral Stage Architecture',
        category: 'decor',
        image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-4',
        title: 'Arena Live Concert Spectacle',
        category: 'concerts',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-5',
        title: 'Candlelit Villa Reception',
        category: 'weddings',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-6',
        title: 'Luxury Brand Launch Event',
        category: 'corporate',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-7',
        title: 'Beachfront Sunset Marquee',
        category: 'weddings',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85'
    },
    {
        id: 'g-8',
        title: 'Crystal Chandelier Pavilion',
        category: 'decor',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85'
    }
];

// Testimonials Dataset
const REVIEWS = [
    {
        quote: "AURA & GOLD transformed our destination wedding in Lake Como into an absolute fairytale. Every single guest was spellbound by the floral installations and seamless coordination.",
        name: "Duchess Victoria & Alexander Sterling",
        event: "Destination Wedding, Italy",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "The team executed our annual global tech summit for 2,500 executives without a single hiccup. Their stage design and VIP hospitality set a new gold standard for our company.",
        name: "Marcus Vance",
        event: "CEO, Nexa Global Enterprises",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "From artist contracting to concert sound staging, AURA & GOLD delivered unmatched luxury and precision. Their attention to detail is truly world-class.",
        name: "Elena Rostova",
        event: "Founder, Harmony Music Festival",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
];

let currentReviewIndex = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initScrollEffects();
    initHeroSlider();
    
    // Page specific renderers
    renderHomeServices();
    renderHomeGallery();
    renderServicesPage('all');
    initServicesPageFilters();
    renderGalleryPage('all');
    initGalleryPageFilters();

    renderTestimonial(0);
    initTestimonialAutoLoop();
    initCountersObserver();
    initFaqAccordion();
    initContactForm();
    initLightbox();
    initMobileNav();
});

/* Custom Cursor */
function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function renderCursor() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();
}

/* Scroll Effects */
function initScrollEffects() {
    const progressBar = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if (progressBar) progressBar.style.width = scrolled + '%';

        if (winScroll > 80) {
            if (navbar) navbar.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('visible');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* Hero Background Slide Loop */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

/* Render Home Teasers */
function renderHomeServices() {
    const container = document.getElementById('home-services-container');
    if (!container) return;

    // Show top 6 on home page
    const top6 = SERVICES.slice(0, 6);
    container.innerHTML = top6.map(s => `
        <div class="service-card">
            <div class="service-img-wrapper">
                <img src="${s.image}" alt="${s.title}" class="service-img" loading="lazy">
                <span class="service-badge">${s.category}</span>
            </div>
            <div class="service-content">
                <h3 class="service-title">${s.title}</h3>
                <p class="service-desc">${s.desc}</p>
                <a href="services.html" class="service-link">View Details ✦</a>
            </div>
        </div>
    `).join('');
}

function renderHomeGallery() {
    const container = document.getElementById('home-gallery-container');
    if (!container) return;

    const top6 = GALLERY.slice(0, 6);
    container.innerHTML = top6.map(g => `
        <div class="gallery-item" onclick="openLightbox('${g.image}')">
            <img src="${g.image}" alt="${g.title}" class="gallery-img" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-category">${g.category}</span>
                <h4 class="gallery-title">${g.title}</h4>
            </div>
        </div>
    `).join('');
}

/* Render Dedicated Services Page (services.html) */
function renderServicesPage(filter = 'all') {
    const container = document.getElementById('services-page-container');
    if (!container) return;

    const filtered = filter === 'all' 
        ? SERVICES 
        : SERVICES.filter(s => s.category === filter);

    container.innerHTML = filtered.map(s => `
        <div class="service-card">
            <div class="service-img-wrapper">
                <img src="${s.image}" alt="${s.title}" class="service-img" loading="lazy">
                <span class="service-badge">${s.category}</span>
            </div>
            <div class="service-content">
                <h3 class="service-title">${s.title}</h3>
                <p class="service-desc">${s.desc}</p>
                <a href="index.html#contact" class="service-link">Book This Service ✦</a>
            </div>
        </div>
    `).join('');
}

function initServicesPageFilters() {
    const btns = document.querySelectorAll('[data-service-filter]');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderServicesPage(btn.dataset.serviceFilter);
        });
    });
}

/* Render Dedicated Gallery Page (gallery.html) */
function renderGalleryPage(filter = 'all') {
    const container = document.getElementById('gallery-page-container');
    if (!container) return;

    const filtered = filter === 'all' 
        ? GALLERY 
        : GALLERY.filter(g => g.category === filter);

    container.innerHTML = filtered.map(g => `
        <div class="gallery-item" onclick="openLightbox('${g.image}')">
            <img src="${g.image}" alt="${g.title}" class="gallery-img" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-category">${g.category}</span>
                <h4 class="gallery-title">${g.title}</h4>
            </div>
        </div>
    `).join('');
}

function initGalleryPageFilters() {
    const btns = document.querySelectorAll('[data-gallery-filter]');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGalleryPage(btn.dataset.galleryFilter);
        });
    });
}

/* Lightbox Modal */
function initLightbox() {
    const modal = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    if (!modal || !closeBtn) return;

    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

function openLightbox(imgSrc) {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('lightbox-img');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.classList.add('active');
    }
}
window.openLightbox = openLightbox;

/* Testimonials Carousel */
function renderTestimonial(index) {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    const rev = REVIEWS[index];
    container.innerHTML = `
        <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-quote">"${rev.quote}"</p>
            <div class="testimonial-author">
                <img src="${rev.avatar}" alt="${rev.name}" class="author-img">
                <div class="text-left">
                    <div class="author-name">${rev.name}</div>
                    <div class="author-event">${rev.event}</div>
                </div>
            </div>
        </div>
    `;
}

function initTestimonialAutoLoop() {
    setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % REVIEWS.length;
        renderTestimonial(currentReviewIndex);
    }, 6000);
}

/* Animated Stat Counters */
function initCountersObserver() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(num => {
                    const target = parseInt(num.dataset.target);
                    let current = 0;
                    const step = Math.ceil(target / 50);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            num.textContent = target + '+';
                            clearInterval(timer);
                        } else {
                            num.textContent = current + '+';
                        }
                    }, 30);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-banner');
    if (statsSection) observer.observe(statsSection);
}

/* FAQ Accordion */
function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            items.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* Contact Form */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thank you for reaching out to AURA & GOLD!\nOur Executive Concierge team will review your event vision and contact you within 24 hours.');
        form.reset();
    });
}

/* Mobile Nav Drawer */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}
