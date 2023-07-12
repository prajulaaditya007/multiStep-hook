import { useState } from "react";

type Step = "step1" | "step2" | "step3";

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

type UseMultiStepFormReturnType = {
  step: Step;
  userInformation: UserInformation;
  personalInformation: PersonalInformation;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleUserInformationChange: (data: Partial<UserInformation>) => void;
  handlePersonalInformationChange: (data: Partial<PersonalInformation>) => void;
};

const useMultiStepForm = (): UseMultiStepFormReturnType => {
  const [step, setStep] = useState<Step>("step1");
  const [userInformation, setUserInformation] = useState<UserInformation>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>({
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
    });

  const handleNextStep = () => {
    setStep((prevStep) => {
      if (prevStep === "step1") {
        return "step2";
      } else if (prevStep === "step2") {
        return "step3";
      }
      return prevStep;
    });
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => {
      if (prevStep === "step2") {
        return "step1";
      } else if (prevStep === "step3") {
        return "step2";
      }
      return prevStep;
    });
  };

  const handleUserInformationChange = (data: Partial<UserInformation>) => {
    setUserInformation((prevUserInformation) => ({
      ...prevUserInformation,
      ...data,
    }));
  };

  const handlePersonalInformationChange = (
    data: Partial<PersonalInformation>
  ) => {
    setPersonalInformation((prevPersonalInformation) => ({
      ...prevPersonalInformation,
      ...data,
    }));
  };

  return {
    step,
    userInformation,
    personalInformation,
    handleNextStep,
    handlePreviousStep,
    handleUserInformationChange,
    handlePersonalInformationChange,
  };
};

export default useMultiStepForm;
