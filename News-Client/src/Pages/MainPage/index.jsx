import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import NewsCard from '../../Components/NewsCard';
import JoinUs from '../../Components/JoinUs';
import Trending from '../../Components/Trending';
import styles from './style.module.css';
import { fetchNewsService, logoutService } from '../../services';

const MainPage = () => {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [categories, setCategories] = useState(['All', 'Technology', 'Science', 'Health', 'Business', 'Entertainment', 'Sports', 'World', 'Politics', 'Startup', 'Travel', 'Fashion', 'Food', 'Art', 'Culture']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const news = await fetchNewsService();
      news.forEach(n => {
        if (!n.category) n.category = 'General';
      });
      setAllNews(news);
      setFilteredNews(news);
    } catch (error) {
      setError(error.message);
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
        window.location.href = '/auth';
      } else {
        alert('Failed to fetch news: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredNews(allNews);
    } else {
      setFilteredNews(allNews.filter(news => news.category === category));
    }
  };

  const searchNews = (query) => {
    setSearchQuery(query);
    const lowerQuery = query.toLowerCase();
    const filtered = allNews.filter(news =>
      news.title.toLowerCase().includes(lowerQuery) ||
      (news.content && news.content.toLowerCase().includes(lowerQuery))
    );
    setFilteredNews(filtered);
  };

  const handleLogout = async () => {
    try {
      await logoutService();
      window.location.href = '/login';
    } catch (error) {
      alert('Logout failed: ' + error.message);
      window.location.href = '/login';
    }
  };

  const topNews = filteredNews.slice(0, 2);
  const lastNews = filteredNews.slice(2);

  return (
    <div className={styles.main}>
      <Navbar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={filterByCategory}
        searchQuery={searchQuery}
        onSearchChange={searchNews}
        onLogout={handleLogout}
      />
      <main className={styles.main}>
        <section className={`${styles.news} ${styles.top}`}>
          {topNews.map(news => (
            <NewsCard
              key={news.id}
              title={news.title}
              newsInfo={news.content || news.description}
              journalist={news.journalist}
              date={news.created_at}
              image={news.image}
              rated={news.id === topNews[0]?.id}
            />
          ))}
        </section>
        <section className={styles.container}>
          <div className={styles.joinNews}>
            <JoinUs />
            <h1 className={styles.title}>Last News</h1>
            <section className={styles.news}>
              {lastNews.map(news => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  newsInfo={news.content || news.description}
                  journalist={news.journalist}
                  date={news.created_at}
                  image={news.image}
                />
              ))}
            </section>
          </div>
          <Trending news={filteredNews.slice(0, 5)} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
