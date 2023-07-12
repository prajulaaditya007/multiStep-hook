import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const Summary: React.FC = () => {
  const { formData, prevStep, onSubmit } = useContext(FormContext);

  const handlePrevious = (e: React.FormEvent) => {
    e.preventDefault();
    prevStep();
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h2>Summary</h2>
      <p>
        <strong>Name:</strong> {formData.firstname} {formData.lastname}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Date of Birth:</strong> {formData.dateOfBirth}
      </p>
      <p>
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p>
        <strong>Marital Status:</strong> {formData.maritalStatus}
      </p>
      <p>
        <strong>Education:</strong> {formData.education}
      </p>
      <button type="button" onClick={handlePrevious}>
        Previous
      </button>
      <button type="submit" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Summary;
