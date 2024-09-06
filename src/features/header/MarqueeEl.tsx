import Marquee from "react-fast-marquee";
import styles from './Header.module.css';

const MarqueeEl: React.FC = () => {

    return (
        <Marquee className={styles.marqueeWrapper}>
            <span className={styles.marqueeItem}>THE COUNTRY OF FREEDOM</span>
            <span className={styles.marqueeItem} style={{ color: 'yellow' }}>#STANDWITHUKRAINE</span>
            <span className={styles.marqueeItem}>THE COUNTRY OF FREEDOM</span>
            <span className={styles.marqueeItem} style={{ color: 'yellow' }}>#STANDWITHUKRAINE</span>
        </Marquee>
    );
};

export default MarqueeEl
    ;
