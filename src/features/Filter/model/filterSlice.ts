import { RootState } from "@/app/providers/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    type: string;
    color: string;
    friends: string;
}

const initialState: FilterState = { type: "all", color: "all", friends: "all" };

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<Partial<FilterState>>) {
            return {
                ...state,
                ...action.payload,
            };
        },
    }
});

export const { setFilter } = filterSlice.actions;
export const filterSelector = (state: RootState) => state.filter;
export default filterSlice;
