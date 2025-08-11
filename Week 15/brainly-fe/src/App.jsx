import React from "react";
import { Button } from "./components/Button";
import { FaArrowRight, FaPlus } from "react-icons/fa";

const App = () => {
  const handlePrimaryClick = () => {
    alert("Primary button clicked!");
  };

  const handleSecondaryClick = () => {
    console.log("Secondary button clicked!");
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Primary, medium size, with end icon */}
      <Button
        variant="primary"
        size="md"
        text="Continue"
        endIcon={<FaArrowRight />}
        onClick={handlePrimaryClick}
      />

      {/* Secondary, small size, with start icon */}
      <Button
        variant="secondary"
        size="sm"
        text="Add Item"
        startIcon={<FaPlus />}
        onClick={handleSecondaryClick}
      />

      {/* Primary, large size, no icons */}
      <Button
        variant="primary"
        size="lg"
        text="Submit"
        onClick={() => alert("Form Submitted!")}
      />
    </div>
  );
};

export default App;
