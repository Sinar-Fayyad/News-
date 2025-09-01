import './card.css';

const Card = ({ image, title, info, category }) => {

    return (
        <div className="card">
            <img className="card-image" src='../../Assets/wlogo.jpg' alt="photo" />
            <div className='card-img-cov'>
                <span className="card-category">{category}</span>
                <h2 className="card-title">{title}</h2>
                <h3 className='card-head-light'>text</h3>
            </div>
            <p className="card-info">{info}</p>
        </div>
    );

};

export default Card;

const Rated_card = ({ image, title, info, category }) => {
    return (
        <div className="rated-card">
            <img className="rated-card-image" src={image} alt="photo" />;
            <span className="rated-card-category">{category}</span>;
            <h2 className="rated-card-title">{title}</h2>;
            <p className="rated-card-info">{info}</p>;
        </div>
    );

};

export { Rated_card };