import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phenomens: [],
    phenom: {},
    searchText: '',
};

export const phenomSlice = createSlice({
    name: 'phenom',
    initialState,
    reducers: {
        setPhenomens: (state, { payload }) => {
            console.log('setPhenomens');
            state.phenomens = payload;
        },
        setPhenom: (state, { payload }) => {
            console.log('setPhenom');
            state.phenom = payload;
        },
        setSearch: (state, { payload }) => {
            state.searchText = payload
        },
        resetPhenom: (state) => {
            console.log('resetPhenom');
            state.phenom = {};
        },
    },
});

export const phenomReducer = phenomSlice.reducer;

export const { setPhenomens, setPhenom, setSearch, resetPhenom } = phenomSlice.actions;