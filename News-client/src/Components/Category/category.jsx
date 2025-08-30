import Button from '../Button/button.jsx';
import './category.css';

var categoryList = ['Sport', 'Technology', 'Health', 'Business'];

const Categories = () => {
    return (

        <div className="categories">
            {categoryList.map((category, index) => (
                <Button key={index} title={category} className = "category-btn" />
            ))}
        </div>
    );
}

export default Categories;