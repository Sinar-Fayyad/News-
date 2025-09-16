import styles from './style.module.css'
import { Search } from 'lucide-react';
import Input from '../Input/index';

const SearchBar = () => {

    return (
        <div>
            <div className={styles.search_bar}>
                <Search className={styles.search_btn}/>
                <Input name="search" 
                       type="text" 
                       hint='Search...' 
                       className={`${styles.search}` }
                />
            </div>
        </div>
    );
}

export default SearchBar