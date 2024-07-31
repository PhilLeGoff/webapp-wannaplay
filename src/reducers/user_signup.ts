import ISignUpData from '@/interfaces/ISignUpData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISignUpData = {
  value: {
    username: null,
    email: null,
    firstname: null,
    lastname: null,
    birthday: { day: null, month: { name: null, number: null }, year: null },
    instrumentPlayed: [],
    instrumentTaught: [],
    genresPlayed: [],
    genresLiked: [],
    description: null,
    profilePicture: null,
    method: null,
    password: null,
  },
};

export const userSlice = createSlice({
  name: 'user_signup',
  initialState,
  reducers: {
    storeInitialData: (state, action) => {
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
      state.value.profilePicture = action.payload.profilePicture;
      state.value.method = action.payload.method;
    },

    storeFirstname: (state, action) => {
      state.value.firstname = action.payload;
    },

    storeLastname: (state, action) => {
      state.value.lastname = action.payload;
    },

    storeDescription: (state, action) => {
      state.value.description = action.payload;
    },

    storeProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload;
    },

    storeBirthDay: (state, action) => {
      state.value.birthday.day = action.payload;
    },

    storeBirthMonth: (state, action) => {
      state.value.birthday.month = action.payload;
    },

    storeBirthYear: (state, action) => {
      state.value.birthday.year = action.payload;
    },

    storeInstrumentPlayed: (state, action: PayloadAction<string>) => {
      state.value.instrumentPlayed.includes(action.payload)
        ? (state.value.instrumentPlayed = state.value.instrumentPlayed.filter(
            (instrument) => instrument !== action.payload
          ))
        : state.value.instrumentPlayed.push(action.payload);
    },

    storeInstrumentTaught: (state, action: PayloadAction<string>) => {
      state.value.instrumentTaught.includes(action.payload)
        ? (state.value.instrumentTaught = state.value.instrumentTaught.filter(
            (instrument) => instrument !== action.payload
          ))
        : state.value.instrumentTaught.push(action.payload);
    },

    storeGenresLiked: (state, action: PayloadAction<string>) => {
      state.value.genresLiked.includes(action.payload)
        ? (state.value.genresLiked = state.value.genresLiked.filter(
            (genre) => genre !== action.payload
          ))
        : state.value.genresLiked.push(action.payload);
    },

    storeGenresPlayed: (state, action: PayloadAction<string>) => {
      state.value.genresPlayed.includes(action.payload)
        ? (state.value.genresPlayed = state.value.genresPlayed.filter(
            (genre) => genre !== action.payload
          ))
        : state.value.genresPlayed.push(action.payload);
    },
  },
});

export const {
  storeInitialData,
  storeFirstname,
  storeLastname,
  storeInstrumentPlayed,
  storeInstrumentTaught,
  storeGenresLiked,
  storeGenresPlayed,
  storeBirthDay,
  storeBirthMonth,
  storeBirthYear,
  storeDescription,
  storeProfilePicture,
} = userSlice.actions;
export default userSlice.reducer;
