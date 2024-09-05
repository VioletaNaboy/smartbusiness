import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <img src="src/image/logo.png" alt="Logo" />
                <a className={styles.navLink} href="https://github.com/VioletaNaboy/smartbusiness" target="_blank" rel="noopener noreferrer" aria-label='GitHub link'>JUNIOR FRONTEND DEVELOPER ASSIGNMENT</a>
            </div>
        </header>
    );
};

export default Header;