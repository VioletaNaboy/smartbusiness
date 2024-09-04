import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { filterUsers } from '../table/tableUsersSlice';
import { User } from '../../types/user';

interface SearchInputProps {
    field: keyof User;
}

const SearchInput: React.FC<SearchInputProps> = ({ field }) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>(() => {
        return localStorage.getItem(`filter-${field}`) || '';
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        localStorage.setItem(`filter-${field}`, newValue);
        dispatch(filterUsers({ field, value: newValue }));
    };
    return <input type="text" placeholder={`Search by ${field}`} value={value} onChange={handleChange} />;
};

export default SearchInput;
