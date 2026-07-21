/* ==========================================================================
   GRACE N GATHER EVENTS - LUXURY INDIAN EVENT MANAGEMENT ENGINE
   ========================================================================== */

// Indian Client Reviews Dataset
const REVIEWS = [
    {
        quote: "Grace N Gather Events turned our destination wedding at Udaipur City Palace into pure royalty! The floral Mandap, Sangeet staging, and hospitality left every guest spellbound.",
        name: "Ananya Singhania & Rohan Kapoor",
        event: "Royal Destination Wedding, Udaipur",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "Their team executed our annual corporate leadership summit in Mumbai for 2,000 delegates seamlessly. The stage lighting and VIP hospitality were world-class.",
        name: "Vikramaditya Roy",
        event: "Managing Director, Apex Tech India",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
        quote: "From Bollywood artist management to beachfront candlelit Sangeet decor in Goa, Grace N Gather handled every detail with perfection and warmth.",
        name: "Meera & Siddharth Deshmukh",
        event: "Sangeet & Wedding Gala, Goa",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
];

let currentReviewIndex = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initComingSoonMode();
    initScrollEffects();
    initHeroSlider();
    
    // Page Filter Engines
    initServicesPageFilters();
    initGalleryPageFilters();

    renderTestimonial(0);
    initTestimonialAutoLoop();
    initCountersObserver();
    initFaqAccordion();
    initContactForm();
    initLightbox();
    initMobileNav();
});

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

/* Category Filter for services.html */
function initServicesPageFilters() {
    const btns = document.querySelectorAll('[data-service-filter]');
    const cards = document.querySelectorAll('#services-page-container .service-card');
    if (btns.length === 0 || cards.length === 0) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.dataset.serviceFilter;
            cards.forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* Category Filter for gallery.html */
function initGalleryPageFilters() {
    const btns = document.querySelectorAll('[data-gallery-filter]');
    const cards = document.querySelectorAll('#gallery-page-container .gallery-item');
    if (btns.length === 0 || cards.length === 0) return;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.dataset.galleryFilter;
            cards.forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
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

/* Contact Form & Google Sheets Integration */
const INQUIRIES_KEY = 'gracengather_inquiries';

// Live Deployed Web App URL for Grace N Gather Events
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbziWlPzEggdDCDMEtXtgn0z1m6QPTEUxaWEbXyZrJEXbbBsaJThMbmRUWKOl19Wsssw/exec';
localStorage.setItem('gracengather_google_sheet_url', GOOGLE_SHEETS_WEB_APP_URL);

function saveInquiry(inquiry) {
    const existing = JSON.parse(localStorage.getItem(INQUIRIES_KEY) || '[]');
    existing.unshift(inquiry);
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(existing));
}

function getInquiries() {
    return JSON.parse(localStorage.getItem(INQUIRIES_KEY) || '[]');
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending to Concierge... ✦';
        submitBtn.disabled = true;

        const name = document.getElementById('c-name').value;
        const email = document.getElementById('c-email').value;
        const phone = document.getElementById('c-phone').value;
        const eventType = document.getElementById('c-type').value;
        const message = document.getElementById('c-message').value;

        const newInquiry = {
            id: 'GNG-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
            timestamp: new Date().toLocaleString(),
            name,
            email,
            phone,
            eventType,
            message
        };

        // 1. Save to local fallback storage
        saveInquiry(newInquiry);

        // 2. Submit to Google Sheets Web App URL if configured
        if (GOOGLE_SHEETS_WEB_APP_URL) {
            try {
                // Prepare clean inquiry object with safe phone string formatting to prevent Google Sheet formula errors
                const payloadData = {
                    id: newInquiry.id,
                    timestamp: newInquiry.timestamp,
                    name: newInquiry.name,
                    email: newInquiry.email,
                    phone: "'" + newInquiry.phone,
                    eventType: newInquiry.eventType,
                    message: newInquiry.message
                };

                await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8'
                    },
                    body: JSON.stringify(payloadData),
                    mode: 'no-cors'
                });
                console.log('📊 Inquiry successfully sent to Google Sheet!');
            } catch (err) {
                console.warn('⚠️ Google Sheets endpoint error:', err);
            }
        } else {
            console.log('ℹ️ Google Sheets Web App URL not set yet. Submit via setGoogleSheetUrl("YOUR_URL")');
        }

        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        alert(`🪷 Thank you, ${name}!\n\nYour event consultation request for "${eventType}" has been successfully submitted to Grace N Gather Events.\nOur Executive Concierge team will review your details and reach out to ${phone} / ${email} within 24 hours.`);
        form.reset();
    });
}

// Allow setting Google Sheets Web App URL dynamically from Console
window.setGoogleSheetUrl = function(url) {
    GOOGLE_SHEETS_WEB_APP_URL = url;
    localStorage.setItem('gracengather_google_sheet_url', url);
    alert('✅ Google Sheets Web App URL updated!');
};

// Make inquiries helper functions globally accessible in window for DevTools
window.getGraceNGatherInquiries = getInquiries;
window.exportGraceNGatherCSV = function() {
    const inquiries = getInquiries();
    if (inquiries.length === 0) {
        alert('No inquiries saved yet.');
        return;
    }
    const headers = ['Inquiry ID', 'Date & Time', 'Full Name', 'Email', 'Phone', 'Event Type', 'Message'];
    const rows = inquiries.map(i => [
        i.id,
        `"${i.timestamp}"`,
        `"${i.name}"`,
        `"${i.email}"`,
        `"${i.phone}"`,
        `"${i.eventType}"`,
        `"${(i.message || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `gracengather_inquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

/* Coming Soon Mode & Admin Preview Unlocking */
function initComingSoonMode() {
    const overlay = document.getElementById('coming-soon-overlay');
    if (!overlay) return;

    const urlParams = new URLSearchParams(window.location.search);
    const isParamPreview = urlParams.has('preview') || urlParams.has('admin') || urlParams.get('mode') === 'preview';
    const isUnlockedSession = sessionStorage.getItem('gng_preview_unlocked') === 'true';

    if (isParamPreview || isUnlockedSession) {
        sessionStorage.setItem('gng_preview_unlocked', 'true');
        overlay.style.display = 'none';
        showAdminBadge();
    } else {
        overlay.style.display = 'flex';
        initCountdownTimer();
        initComingSoonForm();
    }
}

function showAdminBadge() {
    if (document.getElementById('admin-badge')) return;
    const badge = document.createElement('div');
    badge.id = 'admin-badge';
    badge.className = 'admin-preview-badge';
    badge.innerHTML = '🔓 Admin Preview Active (Click to Lock)';
    badge.addEventListener('click', () => {
        sessionStorage.removeItem('gng_preview_unlocked');
        window.location.href = window.location.pathname;
    });
    document.body.appendChild(badge);
}

function initCountdownTimer() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 28);

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dEl = document.getElementById('timer-days');
        const hEl = document.getElementById('timer-hours');
        const mEl = document.getElementById('timer-mins');
        const sEl = document.getElementById('timer-secs');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
        if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

function initComingSoonForm() {
    const form = document.getElementById('cs-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('cs-email').value;

        const newInquiry = {
            id: 'GNG-VIP-' + Math.random().toString(36).substring(2, 7).toUpperCase(),
            timestamp: new Date().toLocaleString(),
            name: 'VIP Early Access Request',
            email: email,
            phone: 'N/A',
            eventType: 'VIP Launch Invitation',
            message: 'Requested early access invitation on Launching Soon landing page.'
        };

        saveInquiry(newInquiry);

        if (GOOGLE_SHEETS_WEB_APP_URL) {
            try {
                await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(newInquiry),
                    mode: 'no-cors'
                });
            } catch (err) {}
        }

        alert(`🪷 Thank you!\n\nYour email (${email}) has been registered for VIP Launch Access with Grace N Gather Events.`);
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
