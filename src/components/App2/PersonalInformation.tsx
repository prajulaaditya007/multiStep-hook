import React from "react";

type PersonalInformationProps = {
  personalInformation: PersonalInformation;
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: Partial<PersonalInformation>) => void;
};

const PersonalInformation = ({
  personalInformation,
  onNext,
  onPrevious,
  onChange,
}: PersonalInformationProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
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
            value={personalInformation.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={personalInformation.gender}
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
            value={personalInformation.maritalStatus}
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
        <button type="button" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInformation;
