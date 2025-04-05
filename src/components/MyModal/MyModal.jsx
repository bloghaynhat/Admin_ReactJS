import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    padding: "40px 42px",
    borderRadius: "8px",
    backgroundColor: "#fff", // Màu nền của modal
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Thêm hiệu ứng đổ bóng cho modal
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền xám phía sau modal
  },
};
Modal.setAppElement("#root");
const MyModal = ({ isOpen, closeModal, content }) => {
  const [formData, setFormData] = useState(content);

  // Cập nhật state khi modal mở và nhận dữ liệu mới
  useEffect(() => {
    setFormData(content);
  }, [content]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2 ">
        EDIT CUSTOMER INFORMATION
      </h2>
      <form
        action=""
        className="flex flex-col my-6 gap-y-7 text-xl [&>div>p]:font-semibold"
      >
        <div className="gap-2 flex flex-col">
          <p className="text-xl">Avatar: </p>
          <input
            type="file"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <p className="text-xl">Name: </p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
            placeholder="Enter name"
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-xl ">Company: </p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
            placeholder="Enter company"
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-xl ">Order Value: </p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
            placeholder="Enter order value"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-3">
          <div className="gap-2 flex flex-col col-span-1">
            <p className="text-xl ">Order Date: </p>
            <input
              type="date"
              className="border-2 border-gray-300 rounded-lg py-1 px-2 text-black"
            />
          </div>

          <div className="gap-2 flex flex-col col-span-1">
            <p className="text-xl ">Status: </p>
            <select
              name=""
              id=""
              className="border-2 border-gray-300 rounded-lg py-1 px-2"
            >
              <option value="Completed">Completed</option>
              <option value="New">New</option>
              <option value="In-progress">In</option>
            </select>
          </div>
        </div>
      </form>
      <div className="mt-8 border-t-2 pt-3 flex justify-end">
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg"
        >
          Đóng
        </button>
      </div>
    </Modal>
  );
};

export default MyModal;
