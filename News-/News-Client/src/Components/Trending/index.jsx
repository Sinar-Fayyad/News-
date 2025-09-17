import styles from './style.module.css';

const Trending = ({ news = [] }) => {
  return (
    <section className={`${styles.trending} hidden`}>
      <h4 className={styles.trendHead}>Trending Now</h4>
      <hr />
      <div className={styles.trendNews}>
        {news.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Trending;
