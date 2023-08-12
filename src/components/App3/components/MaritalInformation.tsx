import React from "react";
import { useDispatch } from "react-redux";
import { setMaritalInformation } from "../redux/multiStepFormSlice";
import { MaritalInformation } from "../types";

type MaritalInformationProps = {
  formData: MaritalInformation;
  onNext: () => void;
  onPrevious: () => void;
  onChange: (data: Partial<MaritalInformation>) => void;
};

const MaritalInformation = ({
  formData,
  onNext,
  onPrevious,
  onChange,
}: MaritalInformationProps) => {
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleNext = () => {
    dispatch(setMaritalInformation(formData));
    onNext();
  };

  return (
    <div>
      <h2>Step 3: Marital Information</h2>
      <form>
        <label>
          Spouse Name:
          <input
            type="text"
            name="spouseName"
            value={formData.spouseName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Children (Yes/No):
          <select
            name="children"
            value={formData.children}
            onChange={handleInputChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Marriage Date:
          <input
            type="text"
            name="marriageDate"
            value={formData.marriageDate}
            onChange={handleInputChange}
            required
          />
        </label>
        {formData.maritalStatus === "Divorced" && (
          <label>
            Divorce Date:
            <input
              type="text"
              name="divorceDate"
              value={formData.divorceDate}
              onChange={handleInputChange}
              required
            />
          </label>
        )}
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

export default MaritalInformation;
