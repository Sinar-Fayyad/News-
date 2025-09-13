import './category.module.css';

var categoryList = [ 'Sport', 'Technology', 'Health', 'Business' ];

const Categories = () => {
    return (

        <div className="categories">
            {categoryList.map((category, index) => (
                <a key={index} className="category-btn" value={category} >{category}</a>
            ))}
        </div>
    );
}

export default Categories;