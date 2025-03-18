import React from "react";
import { saveAs } from "file-saver";

const SaveButton = ({ objects }) => {
  const handleSave = () => {
    const json = JSON.stringify(objects);
    const blob = new Blob([json], { type: "application/json" });
    saveAs(blob, "arrangement.json");
  };

  return (
      <button
          onClick={handleSave}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
      >
        Сохранить
      </button>
  );
};

export default SaveButton;

