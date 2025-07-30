const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

const isDark = localStorage.getItem('darkMode') === 'true';
body.classList.toggle('dark', isDark);
updateIcon(isDark);

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const darkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', darkMode);
    updateIcon(darkMode);
});

function updateIcon(isDark) {
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* AOS init */
AOS.init({ duration: 800 });

/* Vanilla Tilt */
VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.3
});

/* Filter */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
document.addEventListener('mousemove', e => {
    const dot = document.createElement('div');
    dot.className = 'trail';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 800);
});
