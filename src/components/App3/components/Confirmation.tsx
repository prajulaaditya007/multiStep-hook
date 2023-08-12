import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Confirmation = () => {
  const formData = useSelector((state: RootState) => state.multiStepForm);

  return (
    <div>
      <h2>Step 4: Confirmation</h2>
      <p>User Information:</p>
      <p>First Name: {formData.userInformation.firstName}</p>
      <p>Last Name: {formData.userInformation.lastName}</p>
      <p>Email: {formData.userInformation.email}</p>
      <p>Personal Information:</p>
      <p>Date of Birth: {formData.personalInformation.dateOfBirth}</p>
      <p>Gender: {formData.personalInformation.gender}</p>
      <p>Marital Status: {formData.personalInformation.maritalStatus}</p>
      <p>Marital Information:</p>
      <p>Spouse Name: {formData.maritalInformation.spouseName}</p>
      <p>Children: {formData.maritalInformation.children}</p>
      <p>Marriage Date: {formData.maritalInformation.marriageDate}</p>
      {formData.maritalInformation.divorceDate && (
        <p>Divorce Date: {formData.maritalInformation.divorceDate}</p>
      )}
    </div>
  );
};

export default Confirmation;
