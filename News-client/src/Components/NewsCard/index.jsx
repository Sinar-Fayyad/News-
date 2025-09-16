import styles from './style.module.css';

const NewsCard = ({ title, newsInfo, journalist, date, image, rated }) => {
  return (
    <div className={`${styles.card} ${rated ? styles.rated : ''}`}>
      <img src={image} alt="news" />
      <div className={styles.textContainer}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardNewsInfo}>{newsInfo}</p>
        <div>
          <p className={styles.cardInfo}>{journalist}</p>
          <p className={styles.cardInfo}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
