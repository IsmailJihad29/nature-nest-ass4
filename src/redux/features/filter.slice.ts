import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  sortOption: string;
}

const initialState: FilterState = {
  searchQuery: "",
  selectedCategory: "", // For category filtering
  sortOption: "default", // Default sorting option
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers:{
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload; // Store selected category
    },
    setSortOption: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload; // Store sort option
    },
  },
});

export const { setSearchQuery, setCategory, setSortOption, } = filterSlice.actions;
export default filterSlice.reducer;
