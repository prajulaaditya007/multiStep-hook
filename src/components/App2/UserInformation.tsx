import React from "react";

type UserInformationProps = {
  userInformation: UserInformation;
  onNext: () => void;
  onChange: (data: Partial<UserInformation>) => void;
};

const UserInformation = ({
  userInformation,
  onNext,
  onChange,
}: UserInformationProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
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
            value={userInformation.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userInformation.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInformation.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="button" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default UserInformation;
