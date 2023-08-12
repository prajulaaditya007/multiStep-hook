import { UserInformation, PersonalInformation } from "../App3/types";

type ConfirmationProps = {
  userInformation: UserInformation;
  personalInformation: PersonalInformation;
};

const Confirmation = ({
  userInformation,
  personalInformation,
}: ConfirmationProps) => {
  return (
    <div>
      <h2>Step 3: Account Confirmation</h2>
      <p>Account Created!</p>
      <p>First Name: {userInformation.firstName}</p>
      <p>Last Name: {userInformation.lastName}</p>
      <p>Email: {userInformation.email}</p>
      <p>Date of Birth: {personalInformation.dateOfBirth}</p>
      <p>Gender: {personalInformation.gender}</p>
      <p>Marital Status: {personalInformation.maritalStatus}</p>
    </div>
  );
};

export default Confirmation;
