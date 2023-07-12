import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

const PersonalForm: React.FC = () => {
  const { formData, setFormData, nextStep } = useContext(FormContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevious = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ ...formData });
    prevStep();
  };

  return (
    <div>
      <h2>Step 2: Personal Information</h2>
      <form onSubmit={handleNext}>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Marital Status:
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </label>
        <br />
        <label>
          Education:
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalForm;
