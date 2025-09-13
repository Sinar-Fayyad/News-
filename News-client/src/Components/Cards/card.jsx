const Card = ({image, title, journalist, Time2Read, category}) => {

    return(
        <div className="card">
            <img className="card-image" src={image} alt="photo" />
            <div className="card-texts">
                <p className="card-category">{category}</p>
                <h2 className="card-title">{title}</h2>
                <h3 className='card-head-light'></h3>
                <div className="card-info">
                    <p>{journalist}</p>
                    <p>{Time2Read}</p>
                </div>
            </div>
        </div>
    );

};

export default Card;