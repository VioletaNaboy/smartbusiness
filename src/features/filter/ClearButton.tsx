import { useAppDispatch } from '../../app/hooks';
import { clearAllFilters } from './filtersSlice';

import styles from './Filters.module.css'


const ClearButton = () => {
    const dispatch = useAppDispatch();

    const handleClearFilters = () => {
        dispatch(clearAllFilters());
    };
    return (
        <button className={styles.btn} type="button" onClick={handleClearFilters}>Clear filters</button>
    );
};

export default ClearButton;