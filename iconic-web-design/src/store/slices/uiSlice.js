import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScrolled: false,
  activeSection: "hero",
  isNavOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
  },
});

export const { setScrolled, setActiveSection, toggleNav, closeNav } = uiSlice.actions;
export default uiSlice.reducer;
