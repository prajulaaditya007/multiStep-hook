/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useContext } from "react";
import UserForm from "./components/UserForm";
import PersonalForm from "./components/App1/PersonalForm";
import Summary from "./components/Summary";
import Table from "./components/Table";
import { FormContext } from "./contexts/FormContext";
import "./App.css";

const App: React.FC = () => {
  const { currentStep, setCurrentStep, formData }: any =
    useContext(FormContext);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <UserForm />;
      case 2:
        return <PersonalForm />;
      case 3:
        return <Summary />;
      default:
        return null;
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep: any) => prevStep - 1);
  };

  const handleNext = () => {
    setCurrentStep((prevStep: any) => prevStep + 1);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {renderStep()}
      {currentStep === 4 && <Table user={formData} />}
      {currentStep < 4 && (
        <div>
          <button onClick={handlePrevious} disabled={currentStep === 1}>
            Previous
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
};

export default App;
