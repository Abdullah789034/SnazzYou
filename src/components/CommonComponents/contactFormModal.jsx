import React from "react";
import CrossCircledIcon from "../../assets/icons/cross-circled-Icon";
import CCModal from "./CCModal";
import { ModalBody, ModalFooter, Input, Button } from "@nextui-org/react";

const ContactFormModal = ({ isOpen, onClose, title = "Book A Call" }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://146.190.124.167:7878/mailto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully");
      // Reset form fields
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      onClose();
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <CCModal isOpen={isOpen} bodyClass="py-6">
      <div className="flex items-center pb-4">
        <p className="font-semibold text-xl flex-1 text-center">{title}</p>
        <div className="flex-shrink-0 cursor-pointer" onClick={onClose}>
          <CrossCircledIcon />
        </div>
      </div>
      <div>
        <Input
          autoFocus
          placeholder="First Name"
          variant="bordered"
          className="mb-4"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Last Name"
          variant="bordered"
          className="mb-4"
          required
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          variant="bordered"
          className="mb-4"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Phone"
          variant="bordered"
          className="mb-4"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 bg-white rounded"
          rows="6"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          className="w-full bg-[#fff04f] border-black"
          onPress={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </CCModal>
  );
};

export default ContactFormModal;
