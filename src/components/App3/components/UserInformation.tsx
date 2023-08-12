import React from "react";
import { useDispatch } from "react-redux";
import { setUserInformation } from "../redux/multiStepFormSlice";
import { UserInformation } from "../types";

type UserInformationProps = {
  formData: UserInformation;
  onNext: () => void;
  onChange: (data: Partial<UserInformation>) => void;
};

const UserInformation = ({
  formData,
  onNext,
  onChange,
}: UserInformationProps) => {
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleNext = () => {
    dispatch(setUserInformation(formData));
    onNext();
  };

  return (
    <div>
      <h2>Step 1: User Information</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default UserInformation;
