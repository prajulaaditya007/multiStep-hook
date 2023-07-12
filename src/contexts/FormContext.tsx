import React, { createContext, useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  education: string;
}

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: () => void;
}

type User = {
  firstname: string;
  lastname: string;
  email: string;
  date_of_birth: string;
  gender: string;
  marital_status: string;
  education: string;
};

export const FormContext = createContext<FormContextProps | null>(null);

export const FormProvider: React.FC = ({ children }: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    education: "",
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = () => {
    // Update JSON data with new user data
    const newUser: User = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      date_of_birth: formData.dateOfBirth,
      gender: formData.gender,
      marital_status: formData.maritalStatus,
      education: formData.education,
    };
    // You can perform any desired action with the updated JSON data
    console.log(newUser);

    // Reset form data and go back to the first step
    setCurrentStep(1);
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      education: "",
    });
  };

  const contextValue: FormContextProps = {
    formData,
    setFormData,
    nextStep,
    prevStep,
    onSubmit,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
