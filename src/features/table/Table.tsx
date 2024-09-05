import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsersAsync, selectFilteredUsers, selectStatus, filterUsers } from './tableUsersSlice';
import { selectFilters } from '../filter/filtersSlice';
import TableRow from '../tableRow/TableRow';
import styles from './Table.module.css';


const Table: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectFilteredUsers);
    const status = useAppSelector(selectStatus);
    const filters = useAppSelector(selectFilters);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsersAsync());
        }
        dispatch(filterUsers(filters));
    }, [filters, dispatch]);
    return (
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody className={styles.body}>
                {users.map((user) => (
                    <TableRow key={user.id} user={user} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
