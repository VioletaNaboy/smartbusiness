import { createAppSlice } from "../../app/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../types/user';

export interface FilterState {
    filters: {
        [key in keyof User]?: string | undefined;
    };
}

const initialState: FilterState = {
    filters: {},
};

export const filtersSlice = createAppSlice({
    name: 'filters',
    initialState,
    reducers: create => ({
        setFilter: create.reducer(
            (state, action: PayloadAction<{ field: keyof User; value: string }>) => {
                state.filters[action.payload.field] = action.payload.value;
            }
        ),
        clearFilter: create.reducer(
            (state, action: PayloadAction<keyof User>) => {
                delete state.filters[action.payload];
            }
        ),
        clearAllFilters: create.reducer(
            (state) => {
                state.filters = {};
            }
        ),
    }),
    selectors: {
        selectFilters: state => state.filters,
    },
});

export const { setFilter, clearFilter, clearAllFilters } = filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;

export default filtersSlice.reducer;
