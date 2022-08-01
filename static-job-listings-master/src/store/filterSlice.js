import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: []
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        addTag: (state, action) => {
            const tagsArray = state.tags;
            const tag = action.payload;

            const tagExists = tagsArray.includes(tag);
            if(tagExists) return;

            tagsArray.push(tag);
            state.tags = tagsArray;
        },
        removeTag: (state, action) => {
            const tagsArray = state.tags;
            const tagToRemove = action.payload;

            const tagExists = tagsArray.includes(tagToRemove);
            if(!tagExists) return;

            tagsArray.splice(tagsArray.indexOf(tagToRemove), 1);
            state.tags = tagsArray;
        },
        clearTags: (state) => {
            state.tags = [];
        },
    }
})

export const {addTag, removeTag, clearTags} =  filterSlice.actions;
export default filterSlice.reducer;