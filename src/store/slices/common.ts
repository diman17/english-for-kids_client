import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories } from '../../types/common';
import { CommonState } from '../../types/store';

const initialState: CommonState = {
  isNavbarShown: false,
  isPlayMode: false,
  categories: [],
  isLoginModalShown: false,
  admin: {
    login: 'admin',
    password: 'englishforkids',
  },
  isAdminAuth: true,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showNavbar(state: CommonState) {
      state.isNavbarShown = true;
    },
    hideNavbar(state: CommonState) {
      state.isNavbarShown = false;
    },
    setCategories(state: CommonState, action: PayloadAction<Categories>) {
      state.categories = action.payload;
    },
    enablePlayMode(state: CommonState) {
      state.isPlayMode = true;
    },
    disablePlayMode(state: CommonState) {
      state.isPlayMode = false;
    },
    showLoginModal(state: CommonState) {
      state.isLoginModalShown = true;
    },
    hideLoginModal(state: CommonState) {
      state.isLoginModalShown = false;
    },
    logInAdmin(state: CommonState) {
      state.isAdminAuth = true;
    },
    logOutAdmin(state: CommonState) {
      state.isAdminAuth = false;
    },
  },
});

export const {
  showNavbar,
  hideNavbar,
  setCategories,
  enablePlayMode,
  disablePlayMode,
  showLoginModal,
  hideLoginModal,
  logInAdmin,
  logOutAdmin,
} = commonSlice.actions;
export default commonSlice.reducer;
