export type UserInformation = {
    firstName: string;
    lastName: string;
    email: string;
  };
  
  export type PersonalInformation = {
    dateOfBirth: string;
    gender: string;
    maritalStatus: string;
  };
  
  export type MaritalInformation = {
    spouseName: string;
    children: string;
    marriageDate: string;
    divorceDate?: string;
  };
  