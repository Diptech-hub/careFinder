import React from "react";
import MarkdownEditor from "../utils/markdown";

interface PopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const Popup: React.FC<PopupProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 h-screen`}>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <p className="mb-8 text-center text-2xl font-bold">Add Review</p>
        <MarkdownEditor />
        <div className="flex flex-col sm:flex-row justify-between mt-8">
          <button
            onClick={onConfirm}
            className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm mb-2 sm:mb-0 sm:mr-2 focus:outline-none"
          >
            Add another Health Care Provider
          </button>
          <button
            onClick={onCancel}
            className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm focus:outline-none"
          >
            Proceed to Admin dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
