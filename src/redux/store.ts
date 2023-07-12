import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserInformation = {
  firstName: string;
  lastName: string;
  email: string;
};

type PersonalInformation = {
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
};

export type AppState = {
  userInformation: UserInformation;
  personalInformation: PersonalInformation;
};

const initialState: AppState = {
  userInformation: {
    firstName: '',
    lastName: '',
    email: '',
  },
  personalInformation: {
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserInformation: (state, action: PayloadAction<UserInformation>) => {
      state.userInformation = action.payload;
    },
    setPersonalInformation: (state, action: PayloadAction<PersonalInformation>) => {
      state.personalInformation = action.payload;
    },
  },
});

export const { setUserInformation, setPersonalInformation } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
});
