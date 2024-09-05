import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsersAsync, selectFilteredUsers, selectStatus, filterUsers } from './tableUsersSlice';
import { selectFilters } from '../filter/filtersSlice';
import TableRow from '../tableRow/TableRow';
import styles from './Table.module.css';

import ReactLoading from 'react-loading';


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
    }, [filters, status, dispatch]);

    if (status === 'loading') {
        return (
            < div className={styles.loaderContainer} >
                <ReactLoading type="spin" color="#1DACD3" width='86px' />
            </div >
        );
    }

    if (status === 'failed') {
        return (
            <div className={styles.error}>
                <p>Something went wrong. Please try again later.</p>
            </div>
        );
    }

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
                {users.length === 0 ? (
                    <tr>
                        <td colSpan={4}>No users found.</td>
                    </tr>
                ) : (
                    users.map((user) => (
                        <TableRow key={user.id} user={user} />
                    ))

                )}
            </tbody>
        </table>
    );
};

export default Table;
