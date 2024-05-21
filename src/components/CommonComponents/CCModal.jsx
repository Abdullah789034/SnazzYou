import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

const CCModal = ({
  isOpen,
  title,
  children,
  footer,
  size = "md",
  bodyClass = "",
  rootClass = "",
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        closeButton={<></>}
        size={size}
        classNames={{
          body: bodyClass,
          wrapper: rootClass,
        }}
      >
        <ModalContent className="">
          {title && <ModalHeader>{title}</ModalHeader>}
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  );
};
export default CCModal;
