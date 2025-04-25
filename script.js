// Dark mode toggle functionality
const modeSwitch = document.getElementById('switch');
const body = document.body;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.setAttribute('data-theme', 'dark');
    modeSwitch.checked = true;
}

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Simulate loading more posts when scrolling
const postsFeed = document.querySelector('.posts-feed');
const loader = document.querySelector('.loader-container');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        // Simulate loading delay
        loader.style.display = 'flex';
        setTimeout(() => {
            loadMorePosts();
            loader.style.display = 'none';
        }, 1500);
    }
}, { threshold: 0.1 });

observer.observe(loader);

function loadMorePosts() {
    // In a real app, this would fetch data from an API
    // For demo purposes, we'll clone existing posts
    const postTemplate = document.querySelector('.post');
    
    for (let i = 0; i < 3; i++) {
        const newPost = postTemplate.cloneNode(true);
        postsFeed.appendChild(newPost);
    }
}

// Mobile menu toggle (would be implemented in a real app)
document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.mobile-nav-item.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Add hover effects to interactive elements
document.querySelectorAll('button, a, [role="button"]').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transition = 'background-color';
    });
});