import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsersAsync, selectFilteredUsers, selectStatus } from './tableUsersSlice';
import TableRow from '../tableRow/TableRow';

const Table: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(selectFilteredUsers);
    const status = useAppSelector(selectStatus);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsersAsync());
        }
    }, [dispatch, status]);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <TableRow key={user.id} user={user} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
