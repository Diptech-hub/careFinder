import React from "react";
import { Link } from "react-router-dom";

interface PopupProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
      <div className="absolute inset-0 bg-teal-700 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-md shadow-md">
        <p className="mb-8 bg-inherit text-center text-2xl">{message}</p>
        <div className="flex justify-end">
          <Link to="/">
            <button
              onClick={onConfirm}
              className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-md mr-2 text-sm"
            >
              Add another Health Care Provider
            </button>
          </Link>
          <Link to="/data/:id">
            <button
              onClick={onCancel}
              className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Proceed to Admin dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
