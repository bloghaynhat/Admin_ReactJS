import React, { useEffect, useState } from "react";
import DataTableNe from "../components/DataTable/DataTableNe";
import DataTable from "react-data-table-component";
import MyModal from "../components/MyModal/MyModal";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectRow, setSelectRow] = useState(null);
  const [modalMode, setModalMode] = useState("edit"); // State cho modal mode ("edit" hoặc "add")
  const fetchData = async () => {
    try {
      // Gọi API
      const response = await fetch(
        "https://67e369142ae442db76d0029b.mockapi.io/dttb"
      );
      // Kiểm tra nếu response không ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Chuyển đổi phản hồi sang JSON
      const result = await response.json();

      // Cập nhật dữ liệu vào state
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Gọi hàm fetchData khi component mount
    fetchData();
  }, []);

  const openModal = (row) => {
    setSelectRow(row);
    setModalMode("edit"); // Chuyển sang chế độ sửa khi mở modal chỉnh sửa
    setModalShow(true);
  };

  const openAddModal = () => {
    setSelectRow(null); // Khi mở modal thêm, không có dữ liệu chọn
    setModalMode("add"); // Chuyển sang chế độ thêm mới
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setSelectRow(null);
  };

  const statuses = ["New", "In-progress", "Completed"];

  const customStyles = {
    table: {
      style: {
        width: "95%", // Giữ bảng vừa với container
        margin: "auto",
        color: "black",
        borderRadius: "10px",
        border: "0.5px solid gray",
        overflow: "hidden", // Ngăn các phần tử con vượt ra ngoài
      },
    },
    headRow: {
      style: {
        backgroundColor: "#f8f9fa",
        fontSize: "bold",
      },
    },
    pagination: {
      style: {
        width: "95%",
        margin: "auto",
        display: "flex",
        padding: "10px",
        border: "none",
      },
    },
    paginationButton: {
      style: {
        color: "black", // Màu chữ
        padding: "5px 10px",
        cursor: "pointer",
      },
    },
  };
  const columns = [
    {
      name: "CUSTOMER NAME",
      cell: (row) => {
        return (
          <div className="flex gap-1 items-center">
            <img
              src={row.avatar}
              alt="Avatar"
              className="size-6 rounded-full"
            />
            <span>{row.name}</span>
          </div>
        );
      },
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => `$${row.orderValue}`,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => new Date(row.orderDate).toLocaleDateString("vi-VN"), // "dd/mm/yyyy",
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => statuses[row.status % 3],
      cell: (row) => {
        const status = statuses[row.status % 3];
        return (
          <span
            className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${status === "New" ? "bg-blue-100 text-blue-600" : ""}
          ${status === "In-progress" ? "bg-yellow-100 text-yellow-700" : ""}
          ${status === "Completed" ? "bg-green-100 text-green-600" : ""}
        `}
          >
            {status}
          </span>
        );
      },
    },
    {
      cell: (row) => (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 cursor-pointer"
            onClick={() => openModal(row)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </span>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-[#e84f85]"
          >
            <path
              fillRule="evenodd"
              d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
              clipRule="evenodd"
            />
            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
          </svg>
          <div className="font-bold text-2xl">Detailed report</div>
        </div>
        <div className="flex pr-4 gap-4">
          <button
            className="text-white font-bold bg-[#f44b87] border-[1.5px] flex items-center gap-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#f44b87] hover:border-[#f44b87]"
            onClick={openAddModal}
          >
            +
          </button>
          <button className="text-[#f44b87] border-[#f44b87] border-[1.5px] flex items-center gap-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#f44b87] hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 font-bold animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Import
          </button>
          <button className="text-[#f44b87] border-[#f44b87] border-[1.5px] flex items-center gap-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#f44b87] hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Export
          </button>
        </div>
      </div>
      {/* DataTable */}
      {/* <DataTableNe /> */}

      <div className="mt-5 flex flex-col gap-2">
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          selectableRows
        />
      </div>
      {/* Sử dụng MyModal */}
      <MyModal
        key={selectRow?.id}
        isOpen={modalShow}
        closeModal={closeModal}
        content={selectRow}
        onUpdate={() => fetchData()} // Cập nhật lại bảng sau khi thêm/sửa
        mode={modalMode} // Truyền mode cho modal ("add" hoặc "edit")
      />
    </div>
  );
};

export default DashBoard;
