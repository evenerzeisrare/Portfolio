const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});






const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('open');
});






const editButtons = document.querySelectorAll('.edit-btn');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.closest('section, .card, .hero-content');
        if (!parent) return;

        
        const editable = parent.querySelectorAll('p, h3,  .lead');
        const isEditing = button.dataset.editing === 'true';

        editable.forEach(el => {
            el.contentEditable = !isEditing;
            el.style.border = !isEditing ? '1px dashed var(--brand)' : 'none';
            el.style.padding = !isEditing ? '0.2rem 0.4rem' : '';
            el.style.borderRadius = !isEditing ? '6px' : '';
        });

        button.textContent = !isEditing ? 'Save' : 'Edit';
        button.dataset.editing = (!isEditing).toString();
    });
});
