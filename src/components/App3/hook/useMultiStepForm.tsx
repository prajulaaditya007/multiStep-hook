import { useState } from "react";

type Step = "step1" | "step2" | "step3" | "step4";

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

type UseMultiStepFormReturnType = {
  step: Step;
  formData: FormData;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleUserInformationChange: (data: UserInformation) => void;
  handlePersonalInformationChange: (data: PersonalInformation) => void;
  handleMaritalInformationChange: (data: MaritalInformation) => void;
};

const useMultiStepForm = (): UseMultiStepFormReturnType => {
  const [step, setStep] = useState<Step>("step1");
  const [formData, setFormData] = useState<FormData>({
    userInformation: {
      firstName: "",
      lastName: "",
      email: "",
    },
    personalInformation: {
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
    },
    maritalInformation: {
      spouseName: "",
      children: "",
      marriageDate: "",
      divorceDate: "",
    },
  });

  const handleNextStep = () => {
    switch (step) {
      case "step1":
        setStep("step2");
        break;
      case "step2":
        if (formData.personalInformation.maritalStatus === "Bachelor") {
          setStep("step3");
        } else {
          setStep("step4");
        }
        break;
      case "step3":
      case "step4":
        // Handle form submission or any final step logic
        break;
      default:
        break;
    }
  };

  const handlePreviousStep = () => {
    switch (step) {
      case "step2":
        setStep("step1");
        break;
      case "step3":
      case "step4":
        setStep("step2");
        break;
      default:
        break;
    }
  };

  const handleUserInformationChange = (data: UserInformation) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      userInformation: data,
    }));
  };

  const handlePersonalInformationChange = (data: PersonalInformation) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      personalInformation: data,
    }));
  };

  const handleMaritalInformationChange = (data: MaritalInformation) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      maritalInformation: data,
    }));
  };

  return {
    step,
    formData,
    handleNextStep,
    handlePreviousStep,
    handleUserInformationChange,
    handlePersonalInformationChange,
    handleMaritalInformationChange,
  };
};

export default useMultiStepForm;
