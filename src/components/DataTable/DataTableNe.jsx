import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const DataTableNe = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Hàm fetch dữ liệu từ API
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
    // Gọi hàm fetchData
    fetchData();
  }, []);

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
      cell: () => (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 cursor-pointer"
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
    <div className="mt-5">
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        selectableRows
      />
    </div>
  );
};

export default DataTableNe;
