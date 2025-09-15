// Loder

window.addEventListener('load', hidePreloder);

function hidePreloder(){
    document.getElementById("preloder").style.display = "none";
}

// Login check
const token = localStorage.getItem('token');
if (!token) {
    window.location.href = 'login.html';
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

window.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.querySelector('section.news.top');
    const lastNewsSection = document.querySelector('section.container .news');
    const trendingSection = document.querySelector('.trend-news');
    const searchInput = document.getElementById('search');
    let allNews = [];
    let filteredNews = [];

    // Fetch news from API
    async function fetchNews() {
        try {
            const response = await axios.get('http://localhost:8000/api/v0.1/News', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            allNews = response.data;
            allNews.forEach(news => news.category = 'General');
            filteredNews = allNews;
            renderNews(filteredNews);
            renderTrending(filteredNews);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Session expired. Please log in again.');
                localStorage.removeItem('token');
                window.location.href = 'login.html';
            } else {
                alert('Failed to fetch news: ' + (error.response ? error.response.data.message : error.message));
            }
        }
    }

    // Render news cards
    function renderNews(newsList) {
        newsSection.innerHTML = '';
        lastNewsSection.innerHTML = '';
        if (newsList.length === 0) {
            newsSection.innerHTML = '<p>No news found.</p>';
            return;
        }
        // Top rated news (first 2)
        const topRated = newsList.slice(0, 2);
        topRated.forEach(news => {
            const card = createCard(news, true);
            newsSection.appendChild(card);
        });
        // Last news (rest)
        const lastNews = newsList.slice(2);
        lastNews.forEach(news => {
            const card = createCard(news, false);
            lastNewsSection.appendChild(card);
        });
    }

    // Render trending news (top 5 by views or any criteria)
    function renderTrending(newsList) {
        trendingSection.innerHTML = '';
        const trendingNews = newsList.slice(0, 5);
        trendingNews.forEach(news => {
            const div = document.createElement('div');
            div.textContent = news.title;
            trendingSection.appendChild(div);
        });
    }

    // Create a news card element
    function createCard(news, isRated) {
        const card = document.createElement('div');
        card.className = 'card' + (isRated ? ' rated' : '');
        const img = document.createElement('img');
        img.src = news.image || './Assets/wlogo.jpg';
        img.alt = news.title;
        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        const title = document.createElement('h2');
        title.className = 'card-title';
        title.textContent = news.title;
        const info = document.createElement('p');
        info.className = 'card-news-info';
        info.textContent = news.content || news.description || '';
        const metaDiv = document.createElement('div');
        const journalist = document.createElement('p');
        journalist.className = 'card-info';
        journalist.textContent = news.journalist || 'Unknown';
        const date = document.createElement('p');
        date.className = 'card-info';
        date.textContent = new Date(news.created_at).toDateString() || '';
        metaDiv.appendChild(journalist);
        metaDiv.appendChild(date);
        textContainer.appendChild(title);
        textContainer.appendChild(info);
        textContainer.appendChild(metaDiv);
        card.appendChild(img);
        card.appendChild(textContainer);
        return card;
    }

    // Filter news by category
    function filterByCategory(category) {
        if (category === 'All') {
            filteredNews = allNews;
        } else {
            filteredNews = allNews.filter(news => news.category === category);
        }
        renderNews(filteredNews);
        renderTrending(filteredNews);
    }

    // Search news by title or content
    function searchNews(query) {
        const lowerQuery = query.toLowerCase();
        filteredNews = allNews.filter(news =>
            news.title.toLowerCase().includes(lowerQuery) ||
            (news.content && news.content.toLowerCase().includes(lowerQuery))
        );
        renderNews(filteredNews);
        renderTrending(filteredNews);
    }

    // Event listeners for category clicks
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('value');
            filterByCategory(category);
        });
    });

    // Logout function
    async function logoutUser() {
        try {
            await axios.post('http://localhost:8000/api/v0.1/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        } catch (error) {
            alert('Logout failed: ' + (error.response ? error.response.data.message : error.message));
            // Still clear token and redirect
            localStorage.removeItem('token');
            window.location.href = 'login.html';
        }
    }

    // Event listener for search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (query.trim() === '') {
            filteredNews = allNews;
            renderNews(filteredNews);
            renderTrending(filteredNews);
        } else {
            searchNews(query);
        }
    });

    // Event listener for logout button
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', logoutUser);

    // Initial fetch
    fetchNews();
});

