import styles from './style.module.css';
import Logo from '../Logo/index'
import Button from '../Button/index'
import { useNavigate , useLocation } from "react-router-dom";

const Navbar = () => {

    const navigate= useNavigate();
    const location = useLocation();

    return (
        <div className={`${styles.Navbar} main-color text-color`}>
            <Logo/>
            <div className={styles.title}>
                <h1>Dear Future Me...</h1>
            </div>
            {location.pathname !== '/' &&
                <div className={styles.links}>
                    <a onClick = {() => {navigate('/mainPage')}}><h3>Home</h3></a>
                    <Button title="Log out" className={'secondary-color text-color'} onClickListener={()=>navigate('/logout')}/>
                </div>}
        </div>
    );
}

export default Navbar