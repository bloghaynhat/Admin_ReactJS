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

const MyModal = ({ isOpen, closeModal, content, onUpdate, mode = "edit" }) => {
  const [formData, setFormData] = useState(
    mode === "edit"
      ? content
      : {
          name: "",
          company: "",
          orderValue: "",
          orderDate: "",
          status: "New",
          avatar: "",
        }
  );

  const statuses = ["New", "In-progress", "Completed"];

  // Cập nhật state khi modal mở và nhận dữ liệu mới
  useEffect(() => {
    if (mode === "edit" && content) {
      setFormData({
        ...content,
        status: statuses[parseInt(content.status, 10) % 3] || "New",
      });
    }
  }, [content, mode]);

  const handleInputChange = (field, value) => {
    if (field === "status") {
      const statusValue =
        {
          New: 0,
          "In-progress": 1,
          Completed: 2,
        }[value] ?? 0;

      setFormData({
        ...formData,
        status: statusValue,
      });
    } else if (field === "orderDate" && value) {
      setFormData({
        ...formData,
        orderDate: new Date(value).toISOString(), // Đảm bảo orderDate là chuỗi ISO
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  // API PUT
  const handleSave = async () => {
    try {
      // Kiểm tra formData và đảm bảo các trường có giá trị hợp lệ
      if (
        !formData.name ||
        !formData.company ||
        !formData.orderDate ||
        !formData.orderValue
      ) {
        alert("Please fill in all fields.");
        return;
      }

      const updatedData = {
        ...formData,
        orderValue: parseInt(formData.orderValue, 10) || 0, // Chuyển orderValue sang số
        status: parseInt(formData.status, 10), // Chuyển status sang số
      };

      const response = await fetch(
        `https://67e369142ae442db76d0029b.mockapi.io/dttb/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error("Cập nhật không thành công");
      }

      const data = await response.json();
      console.log("Cập nhật thành công:", data);

      // Đóng modal và cập nhật bảng dữ liệu
      closeModal();
      onUpdate?.();
    } catch (error) {
      console.error("Lỗi cập nhật:", error);
    }
  };

  // API POST
  const handleAddCustomer = async () => {
    try {
      // Kiểm tra formData và đảm bảo các trường có giá trị hợp lệ
      if (
        !formData.name ||
        !formData.company ||
        !formData.orderDate ||
        !formData.orderValue
      ) {
        alert("Please fill in all fields.");
        return;
      }

      // Chuyển đổi status thành số
      const statusMap = {
        New: 0,
        "In-progress": 1,
        Completed: 2,
      };
      const statusNumber = statusMap[formData.status] || 0;

      // Đảm bảo orderDate là đối tượng Date và chuyển thành ISO string
      const orderDate = new Date(formData.orderDate);
      if (isNaN(orderDate)) {
        alert("Invalid order date.");
        return;
      }

      // Chuyển đổi orderValue sang số, kiểm tra NaN
      const orderValue = parseInt(formData.orderValue, 10);
      if (isNaN(orderValue)) {
        alert("Invalid order value.");
        return;
      }

      const response = await fetch(
        "https://67e369142ae442db76d0029b.mockapi.io/dttb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            avatar: formData.avatar || "",
            company: formData.company,
            name: formData.name,
            orderDate: orderDate.toISOString(),
            orderValue: orderValue, // Đảm bảo là số
            status: statusNumber, // Gửi status dưới dạng số
          }),
        }
      );

      if (!response.ok) throw new Error("Thêm mới không thành công");

      const addedData = await response.json();
      console.log("Thêm mới thành công:", addedData);

      closeModal();
      onUpdate?.(); // Cập nhật lại bảng dữ liệu nếu cần
    } catch (error) {
      console.error("Lỗi thêm mới khách hàng:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2 ">
        {mode === "edit" ? "EDIT CUSTOMER INFORMATION" : "ADD CUSTOMER"}
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
            onChange={(e) =>
              handleInputChange("avatar", e.target.files[0]?.name || "")
            }
          />
        </div>
        <div className="gap-2 flex flex-col">
          <p className="text-xl">Name: </p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
            placeholder="Enter name"
            value={formData?.name || ""}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-xl ">Company: </p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
            placeholder="Enter company"
            value={formData?.company || ""}
            onChange={(e) => handleInputChange("company", e.target.value)}
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-xl ">Order Value: </p>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg py-1 px-2"
            placeholder="Enter order value"
            value={formData?.orderValue || ""}
            onChange={(e) => handleInputChange("orderValue", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-3">
          <div className="gap-2 flex flex-col col-span-1">
            <p className="text-xl ">Order Date: </p>
            <input
              type="date"
              className="border-2 border-gray-300 rounded-lg py-1 px-2 text-black"
              value={
                formData?.orderDate ? formData.orderDate.split("T")[0] : ""
              } // Đảm bảo rằng orderDate là chuỗi
              onChange={(e) =>
                setFormData({ ...formData, orderDate: e.target.value })
              }
            />
          </div>

          <div className="gap-2 flex flex-col col-span-1">
            <p className="text-xl ">Status: </p>
            <select
              name=""
              id=""
              className="border-2 border-gray-300 rounded-lg py-1 px-2"
              value={formData?.status || "New"} // Giá trị mặc định là "New"
              onChange={(e) => handleInputChange("status", e.target.value)}
            >
              <option value="Completed">Completed</option>
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
            </select>
          </div>
        </div>
      </form>
      <div className="mt-8 border-t-2 pt-3 flex justify-end gap-2">
        <button
          onClick={closeModal}
          className="bg-red-500 text-white py-2 px-6 rounded-lg"
        >
          Đóng
        </button>
        {mode === "edit" ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-6 rounded-lg"
          >
            Lưu
          </button>
        ) : (
          <button
            onClick={handleAddCustomer}
            className="bg-green-500 text-white py-2 px-6 rounded-lg"
          >
            Thêm
          </button>
        )}
      </div>
    </Modal>
  );
};

export default MyModal;
