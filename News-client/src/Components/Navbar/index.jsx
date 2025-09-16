import React from 'react';
import styles from './style.module.css';
import Button from '../Button/index';
import SearchBar from '../Search/index';

const Navbar = ({
    categories = [],
    selectedCategory = 'All',
    onCategorySelect = () => {},
    searchQuery = '',
    onSearchChange = () => {},
    onLogout = () => {}
}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        // Search is handled in MainPage
    };

    return (
        <>
            <header className={styles.headContainer}>
                <h1 className={styles.mainTitle}>Top News</h1>
                <h3 className={styles.subtitle}>Stay Updated with the Latest Headlines</h3>
                <SearchBar value={searchQuery} onChangeListener={onSearchChange} onSubmit={handleSearch} />
                <Button title="Logout" className={styles.logoutBtn} onClickListener={onLogout} />
            </header>
            <nav className={styles.categories}>
                {categories.map((category, index) => (
                    <a
                        key={index}
                        href="#"
                        value={category}
                        className={selectedCategory === category ? styles.active : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            onCategorySelect(category);
                        }}
                    >
                        {category}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default Navbar;
