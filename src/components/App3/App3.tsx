import useMultiStepForm from "./hook/useMultiStepForm";
import UserInformation from "./components/UserInformation";
import PersonalInformation from "./components/PersonalInformation";
import Confirmation from "./components/Confirmation";
import MaritalInformation from "./components/MaritalInformation";
import "./style.css";

const App3 = () => {
  const {
    step,
    formData,
    handleNextStep,
    handlePreviousStep,
    handleUserInformationChange,
    handlePersonalInformationChange,
    handleMaritalInformationChange,
  } = useMultiStepForm();

  const renderStep = () => {
    switch (step) {
      case "step1":
        return (
          <UserInformation
            formData={formData.userInformation}
            onNext={handleNextStep}
            onChange={handleUserInformationChange}
          />
        );
      case "step2":
        return (
          <PersonalInformation
            formData={formData.personalInformation}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            onChange={handlePersonalInformationChange}
          />
        );
      case "step3":
        return (
          <MaritalInformation
            formData={formData.maritalInformation}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            onChange={handleMaritalInformationChange}
          />
        );
      case "step4":
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>Multi-Step Form</h1>
      {renderStep()}
    </div>
  );
};

export default App3;
