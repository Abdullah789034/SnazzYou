import React from "react";
import CrossCircledIcon from "../../assets/icons/cross-circled-Icon";
import CCModal from "./CCModal";
import {
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "@nextui-org/react";

const ContactFormModal = ({ isOpen, onClose, title = "Book A Call" }) => {
  return (
    <CCModal isOpen={isOpen} bodyClass="py-6">
      <div className="flex items-center pb-4">
        <p className="font-semibold text-xl flex-1 text-center">{title}</p>
        <div className="flex-shrink-0 cursor-pointer" onClick={onClose}>
          <CrossCircledIcon />
        </div>
      </div>
      <div>
        <ModalBody>
          <Input
            autoFocus
            placeholder="First Name"
            variant="bordered"
            className="mb-4"
          />
          <Input
            placeholder="Last Name"
            variant="bordered"
            className="mb-4"
          />
          <Input
            type="email"
            placeholder="Email"
            variant="bordered"
            className="mb-4"
          />
          <Input
            placeholder="Phone"
            variant="bordered"
            className="mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 bg-white rounded"
            rows="6"
            required
          />
        </ModalBody>
        <ModalFooter>

          <Button className="w-full bg-[#fff04f] border-black" onPress={onClose}>
            Submit
          </Button>
        </ModalFooter>
      </div>
    </CCModal>
  );
};

export default ContactFormModal;
