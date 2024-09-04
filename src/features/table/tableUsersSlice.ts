import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import type { AppThunk } from "../../app/store";
import { User } from '../../types/user';
import { fetchUsers } from '../../app/api';


interface UsersState {
    users: User[];
    filteredUsers: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UsersState = {
    users: [],
    filteredUsers: [],
    status: 'idle',
};

export const usersSlice = createAppSlice({
    name: 'users',
    initialState,
    reducers: create => ({
        filterUsers: create.reducer(
            (state, action: PayloadAction<{ field: keyof User; value: string }>) => {
                if (action.payload.field === 'id') {
                    return;
                }
                state.filteredUsers = state.users.filter(user => {
                    const fieldValue = user[action.payload.field];
                    if (typeof fieldValue === 'string') {
                        return fieldValue.toLowerCase().includes(action.payload.value.toLowerCase());
                    }
                    return fieldValue.toString().toLowerCase().includes(action.payload.value.toLowerCase());
                });
            }

        ),
        fetchUsersAsync: create.asyncThunk(
            async () => {
                const users = await fetchUsers();
                return users;
            },
            {
                pending: state => {
                    state.status = 'loading';
                },
                fulfilled: (state, action) => {
                    state.status = 'succeeded';
                    state.users = action.payload;
                    state.filteredUsers = action.payload;
                },
                rejected: state => {
                    state.status = 'failed';
                },
            }
        ),
    }),
    selectors: {
        selectUsers: state => state.users,
        selectFilteredUsers: state => state.filteredUsers,
        selectStatus: state => state.status,
    },
});

export const { filterUsers, fetchUsersAsync } = usersSlice.actions;
export const { selectUsers, selectFilteredUsers, selectStatus } = usersSlice.selectors;


export default usersSlice.reducer;
