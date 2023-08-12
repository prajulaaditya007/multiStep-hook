import { createSlice } from '@reduxjs/toolkit';

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

type MaritalInformation = {
  spouseName: string;
  children: string;
  marriageDate: string;
  divorceDate?: string;
};

type FormData = {
  userInformation: UserInformation;
  personalInformation: PersonalInformation;
  maritalInformation: MaritalInformation;
};

const initialState: FormData = {
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
  maritalInformation: {
    spouseName: '',
    children: '',
    marriageDate: '',
    divorceDate: '',
  },
};

const multiStepFormSlice = createSlice({
  name: 'multiStepForm',
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.userInformation = action.payload;
    },
    setPersonalInformation: (state, action) => {
      state.personalInformation = action.payload;
    },
    setMaritalInformation: (state, action) => {
      state.maritalInformation = action.payload;
    },
  },
});

export const {
  setUserInformation,
  setPersonalInformation,
  setMaritalInformation,
} = multiStepFormSlice.actions;

export default multiStepFormSlice.reducer;
