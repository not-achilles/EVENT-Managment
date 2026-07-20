// Event Management State & LocalStorage Logic
const STORAGE_KEY = 'eventhub_pro_events';

const INITIAL_EVENTS = [
    {
        id: '1',
        title: 'Global AI & Cloud Architecture Summit 2026',
        category: 'Tech & Code',
        date: '2026-08-15T10:00',
        location: 'Silicon Valley Convention Center & Virtual',
        price: 99,
        capacity: 500,
        booked: 342,
        description: 'Join top software engineers and architects to discuss next-generation AI agents, distributed cloud computing, and real-time automation.'
    },
    {
        id: '2',
        title: 'Full-Stack Developer Hands-On Bootcamp',
        category: 'Workshops',
        date: '2026-08-20T14:00',
        location: 'Innovation Hub, Floor 4',
        price: 49,
        capacity: 80,
        booked: 65,
        description: 'Interactive workshop on building scalable web apps with Git auto-commit workflows, Node.js, and modern UI components.'
    },
    {
        id: '3',
        title: 'Cybersecurity & Zero-Trust Defense Conference',
        category: 'Conferences',
        date: '2026-09-02T09:30',
        location: 'Metropolitan Expo Center',
        price: 149,
        capacity: 300,
        booked: 120,
        description: 'Keynotes on network protection, automated dev-sec-ops pipelines, and secure cloud credentials.'
    },
    {
        id: '4',
        title: 'Indie Tech & Creative Design Showcase',
        category: 'Music & Art',
        date: '2026-09-18T18:00',
        location: 'Design Quarter Arts Lab',
        price: 0,
        capacity: 150,
        booked: 145,
        description: 'A celebration of creative UI design, generative artwork, and indie project demos with live music.'
    }
];

let events = [];
let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'date-asc';

// DOM Elements
const eventsGrid = document.getElementById('events-grid');
const globalSearch = document.getElementById('global-search');
const categoryTabs = document.getElementById('category-tabs');
const sortSelect = document.getElementById('sort-select');
const themeToggle = document.getElementById('theme-toggle');

// Modal Elements
const modalCreate = document.getElementById('modal-create-event');
const btnOpenCreate = document.getElementById('btn-open-create');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelModal = document.getElementById('btn-cancel-modal');
const formCreate = document.getElementById('form-create-event');

const modalBooking = document.getElementById('modal-booking');
const btnCloseBooking = document.getElementById('btn-close-booking');
const btnFinishBooking = document.getElementById('btn-finish-booking');
const bookingBody = document.getElementById('booking-modal-body');

// Stats Elements
const statTotal = document.getElementById('stat-total-events');
const statAttendees = document.getElementById('stat-total-attendees');
const statRevenue = document.getElementById('stat-revenue');
const statUpcoming = document.getElementById('stat-upcoming');

// Initialize
function init() {
    loadEvents();
    setupEventListeners();
    render();
}

function loadEvents() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            events = JSON.parse(saved);
        } catch(e) {
            events = INITIAL_EVENTS;
        }
    } else {
        events = INITIAL_EVENTS;
        saveEvents();
    }
}

function saveEvents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        themeToggle.querySelector('.theme-icon').textContent = nextTheme === 'dark' ? '🌙' : '☀️';
    });

    // Search
    globalSearch.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        render();
    });

    // Category filter
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            render();
        }
    });

    // Sorting
    sortSelect.addEventListener('change', (e) => {
        sortBy = e.target.value;
        render();
    });

    // Modals
    btnOpenCreate.addEventListener('click', () => modalCreate.classList.add('active'));
    btnCloseModal.addEventListener('click', () => modalCreate.classList.remove('active'));
    btnCancelModal.addEventListener('click', () => modalCreate.classList.remove('active'));
    
    btnCloseBooking.addEventListener('click', () => modalBooking.classList.remove('active'));
    btnFinishBooking.addEventListener('click', () => modalBooking.classList.remove('active'));

    // Create Event Form
    formCreate.addEventListener('submit', (e) => {
        e.preventDefault();
        const newEvent = {
            id: Date.now().toString(),
            title: document.getElementById('event-title').value,
            category: document.getElementById('event-category').value,
            price: parseFloat(document.getElementById('event-price').value) || 0,
            date: document.getElementById('event-date').value,
            capacity: parseInt(document.getElementById('event-capacity').value) || 100,
            booked: 0,
            location: document.getElementById('event-location').value,
            description: document.getElementById('event-description').value
        };

        events.unshift(newEvent);
        saveEvents();
        formCreate.reset();
        modalCreate.classList.remove('active');
        render();
    });
}

function getFilteredEvents() {
    return events.filter(evt => {
        const matchesCategory = currentCategory === 'all' || evt.category === currentCategory;
        const matchesSearch = evt.title.toLowerCase().includes(searchQuery) || 
                              evt.location.toLowerCase().includes(searchQuery) ||
                              evt.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    }).sort((a, b) => {
        if (sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
        if (sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
        if (sortBy === 'popular') return b.booked - a.booked;
        return 0;
    });
}

function updateStats() {
    const totalEvents = events.length;
    const totalAttendees = events.reduce((sum, e) => sum + e.booked, 0);
    const totalRev = events.reduce((sum, e) => sum + (e.booked * e.price), 0);
    
    const now = new Date();
    const upcoming = events.filter(e => new Date(e.date) >= now).length;

    statTotal.textContent = totalEvents;
    statAttendees.textContent = totalAttendees.toLocaleString();
    statRevenue.textContent = `$${totalRev.toLocaleString()}`;
    statUpcoming.textContent = upcoming;
}

function bookTicket(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    if (event.booked >= eventCapacity) {
        alert('Sorry, this event is fully booked!');
        return;
    }

    event.booked += 1;
    saveEvents();

    bookingBody.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
        <h4 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${event.title}</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            📅 ${new Date(event.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })} <br>
            📍 ${event.location}
        </p>
        <div style="background: var(--bg-primary); padding: 1rem; border-radius: 12px; border: 1px dashed var(--accent-primary); margin-bottom: 1rem;">
            <div style="font-size: 0.8rem; color: var(--text-muted);">TICKET ID</div>
            <div style="font-weight: 800; font-family: monospace; letter-spacing: 1px; color: var(--accent-primary);">EVT-${Math.random().toString(36).substring(2, 9).toUpperCase()}</div>
        </div>
    `;

    modalBooking.classList.add('active');
    render();
}

function render() {
    updateStats();
    const filtered = getFilteredEvents();

    if (filtered.length === 0) {
        eventsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <h3>No events found</h3>
                <p>Try adjusting your search query or category filters.</p>
            </div>
        `;
        return;
    }

    eventsGrid.innerHTML = filtered.map(evt => {
        const percent = Math.min(100, Math.round((evt.booked / evt.capacity) * 100));
        const formattedDate = new Date(evt.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
        const priceLabel = evt.price === 0 ? 'FREE' : `$${evt.price}`;

        return `
            <div class="event-card">
                <div class="event-banner">
                    <span class="event-category-badge">${evt.category}</span>
                    <span class="event-price-tag">${priceLabel}</span>
                </div>
                <div class="event-body">
                    <h3 class="event-title">${evt.title}</h3>
                    <div class="event-meta">
                        <div class="event-meta-item"><span>📅</span> ${formattedDate}</div>
                        <div class="event-meta-item"><span>📍</span> ${evt.location}</div>
                    </div>
                    <p class="event-description">${evt.description}</p>
                    
                    <div class="event-footer">
                        <div class="capacity-info">
                            <div>${evt.booked} / ${evt.capacity} Attending</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${percent}%;"></div>
                            </div>
                        </div>
                        <button class="btn btn-primary" onclick="bookTicket('${evt.id}')" ${evt.booked >= evt.capacity ? 'disabled' : ''}>
                            ${evt.booked >= evt.capacity ? 'Sold Out' : 'Book Ticket'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Make bookTicket available globally
window.bookTicket = bookTicket;

// Run on load
document.addEventListener('DOMContentLoaded', init);
