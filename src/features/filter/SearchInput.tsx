import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFilters, setFilter } from './filtersSlice';
import { User } from '../../types/user';

import styles from './Filters.module.css'

interface SearchInputProps {
    field: keyof User;
}

const SearchInput: React.FC<SearchInputProps> = ({ field }) => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(selectFilters);
    const value = filters[field] || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        dispatch(setFilter({ field, value: newValue }));
    };
    return <input className={styles.input} type="text" placeholder={`Search by ${field}`} value={value} onChange={handleChange} />;
};

export default SearchInput;
