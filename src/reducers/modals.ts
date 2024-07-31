import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    signUp: { display: false, firstStep: true }, // handles the display change for sign up modal
    signIn: { display: false },
    updateProfile: { display: false },
    profilePage: { display: false, username: null },
    chatPage: { display: false, usernames: [] },
  },
};

export const userSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showSignUp: (state, action) => {
      state.value.signUp.display = action.payload;
    },
    showSignIn: (state, action) => {
      state.value.signIn.display = action.payload;
    },
    setSignUpStep: (state) => {
      state.value.signUp.firstStep = !state.value.signUp.firstStep;
    },
  },
});

export const { showSignIn, showSignUp, setSignUpStep } = userSlice.actions;
export default userSlice.reducer;
