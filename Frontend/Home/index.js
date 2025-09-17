// Loder

window.addEventListener('load', hidePreloder);

function hidePreloder(){
    document.getElementById("preloder").style.display = "none";
}

// Header

const date = document.querySelector('.date');
date.innerHTML = new Date().toDateString();

// Category

var categoryList = ['All', 'Technology', 'Science', 'Health', 'Business', 'Entertainment', 'Sports', 'World', 'Politics', 'Startup', 'Travel', 'Fashion', 'Food', 'Art', 'Culture' ];
const nav = document.querySelector('.categories');

var map = categoryList.map((category, index) => {
    return `<a href="#" key="${index}" value="${category}">${category}</a>`;
});

nav.innerHTML = map.join('');

// Global variable to store all news
let allNews = [];

// Filter card By category

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedCategory = e.target.getAttribute('value');
        if (selectedCategory === 'All') {
            displayNewsCards(allNews);
        } else {
            const filteredNews = allNews.filter(news => news.category === selectedCategory);
            displayNewsCards(filteredNews);
        }
    });
});

// Append Card

async function fetchAndDisplayNews() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.error('No token found, please login');
        return;
    }
    try {
        const response = await fetch('http://localhost:8000/api/v0.1/News', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        const newsList = await response.json();
        allNews = newsList; // Store news globally for filtering
        displayNewsCards(allNews);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}


function displayNewsCards(newsList) {
    const newsContainer = document.querySelector('.join-news .news');
    newsContainer.innerHTML = '';
    newsList.forEach(news => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${image}" alt="news image">
            <div class="text-container">
                <h2 class="card-title">${news.title}</h2>
                <p class="card-news-info">${news.content.substring(0, 100)}...</p>
                <div>
                    <p class="card-info">${news.author}</p>
                    <p class="card-info">${news.category}</p>
                    <p class="card-info">${new Date(news.created_at).toDateString()}</p>
                </div>
            </div>
        `;
        newsContainer.appendChild(card);
    });
}

window.addEventListener('load', () => {
    hidePreloder();
    fetchAndDisplayNews();
});

