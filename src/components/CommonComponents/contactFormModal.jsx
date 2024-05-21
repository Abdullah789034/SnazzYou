import React from "react";
import CrossCircledIcon from "../../assets/icons/cross-circled-Icon";
import CCModal from "./CCModal";

const ContactFormModal = ({ isOpen, onClose, title = "Book A Call" }) => {
  return (
    <CCModal isOpen={isOpen} bodyClass="py-6">
      <div className="flex items-center pb-4">
        <p className="font-semibold text-xl flex-1 text-center">{title}</p>
        <div className="flex-shrink-0 cursor-pointer" onClick={onClose}>
          <CrossCircledIcon />
        </div>
      </div>
      <div>modal content</div>
    </CCModal>
  );
};

export default ContactFormModal;
