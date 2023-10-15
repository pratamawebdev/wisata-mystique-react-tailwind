import { useState } from "react";

const Modal = ({ isVisible, onClose, children, title }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      id="wrapper"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="w-[600px] flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-xl text-white place-self-end"
        >
          X
        </button>
        <div className="p-2 bg-white rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
