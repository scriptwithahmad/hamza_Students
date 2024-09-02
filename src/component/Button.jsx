import React from "react";

const PrimaryButton = () => {
  return (
    <div className="primary">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Primary Button
      </button>
    </div>
  );
};

const SecondaryButton = () => {
  return (
    <div>
      <button className="secondary">
        Secondary Button
      </button>
    </div>
  );
};

export { PrimaryButton, SecondaryButton };
