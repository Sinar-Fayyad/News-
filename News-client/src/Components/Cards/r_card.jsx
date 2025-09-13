const Rated_card = ({ image, title, journalist, journal, Time2Read, category }) => {
    return (
        <div className="rated-card">
            <img className="rated-card-image" src={image} alt="photo" />
            <div className='rated-card-img-cov'>
                <span className="rated-card-category">{category}</span>
                <h2 className="rated-card-title">{title}</h2>
                <h3 className='rated-card-head-light'></h3>
            </div>
            <div className="rated-card-info">
                <p>{journalist}</p>
                <p>{journal}</p>
                <p>{Time2Read}</p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );

};

export default Rated_card;