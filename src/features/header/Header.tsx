import styles from './Header.module.css'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <img src={logo} alt="Logo" />
                <a className={styles.navLink} href="https://github.com/VioletaNaboy/smartbusiness" target="_blank" rel="noopener noreferrer" aria-label='GitHub link'>FRONTEND DEVELOPER ASSIGNMENT</a>
            </div>
        </header>
    );
};

export default Header;