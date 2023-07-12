import Confirmation from "./components/App2/Confirmation";
import PersonalInformation from "./components/App2/PersonalInformation";
import UserInformation from "./components/App2/UserInformation";
import useMultiStepForm from "./hook/useMultiStepForm";
import "./App.css";

const App = () => {
  const {
    step,
    userInformation,
    personalInformation,
    handleNextStep,
    handlePreviousStep,
    handleUserInformationChange,
    handlePersonalInformationChange,
  } = useMultiStepForm();

  const renderStep = () => {
    switch (step) {
      case "step1":
        return (
          <UserInformation
            userInformation={userInformation}
            onNext={handleNextStep}
            onChange={handleUserInformationChange}
          />
        );
      case "step2":
        return (
          <PersonalInformation
            personalInformation={personalInformation}
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            onChange={handlePersonalInformationChange}
          />
        );
      case "step3":
        return (
          <Confirmation
            userInformation={userInformation}
            personalInformation={personalInformation}
          />
        );
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

export default App;
