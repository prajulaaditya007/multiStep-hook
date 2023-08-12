import React from "react";
import { useDispatch } from "react-redux";
import { setPersonalInformation } from "../redux/multiStepFormSlice";
import { PersonalInformation } from "../types";

type PersonalInformationProps = {
  formData: PersonalInformation;
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: Partial<PersonalInformation>) => void;
};

const PersonalInformation = ({
  formData,
  onNext,
  onPrevious,
  onChange,
}: PersonalInformationProps) => {
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleNext = () => {
    dispatch(setPersonalInformation(formData));
    onNext();
  };

  return (
    <div>
      <h2>Step 2: Personal Information</h2>
      <form>
        <label>
          Date of Birth:
          <input
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Marital Status:
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Marital Status</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </label>
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
