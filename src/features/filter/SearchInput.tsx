import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { filterUsers } from '../table/tableUsersSlice';
import { User } from '../../types/user';

interface SearchInputProps {
    field: keyof User;
}

const SearchInput: React.FC<SearchInputProps> = ({ field }) => {
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterUsers({ field, value: e.target.value }));
    };

    return <input type="text" placeholder={`Search by ${field}`} onChange={handleChange} />;
};

export default SearchInput;
