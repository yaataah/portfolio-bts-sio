const darkBtn = document.getElementById('darkModeToggle');
const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');

function openTab(tabId) {
    navButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    const targetBtn = document.querySelector(`nav button[data-tab="${tabId}"]`);
    const targetSection = document.getElementById(tabId);

    if (targetBtn) targetBtn.classList.add('active');
    if (targetSection) targetSection.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (darkBtn) {
    darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkBtn.textContent = document.body.classList.contains('dark-mode')
            ? '☀️ Light Mode'
            : '🌙 Dark Mode';
    });
}

navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        openTab(btn.dataset.tab);
    });
});

const goHome = document.getElementById('goHome');
if (goHome) {
    goHome.addEventListener('click', () => {
        openTab('accueil');
    });
}

const btnDecouvrir = document.getElementById('btnDecouvrir');
if (btnDecouvrir) {
    btnDecouvrir.addEventListener('click', () => {
        openTab('projets');
    });
}

const btnProfil = document.getElementById('btnProfil');
if (btnProfil) {
    btnProfil.addEventListener('click', () => {
        openTab('profil');
    });
}

const btnDecouvrirBTS = document.getElementById('btnDecouvrirBTS');
if (btnDecouvrirBTS) {
    btnDecouvrirBTS.addEventListener('click', () => {
        openTab('bts-sio');
    });
}

document.querySelectorAll('#veille .flip-card-inner').forEach(card => {
    card.addEventListener('click', () => {
        card.parentElement.classList.toggle('active');
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${x}%`);
        card.style.setProperty('--my', `${y}%`);
    });
});