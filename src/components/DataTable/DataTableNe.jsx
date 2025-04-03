import React, { useState, useEffect } from "react";


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

      fetchData();
    };
    // Gọi hàm fetchData
    fetchData();
  }, []);

  const customStyles = {
    table: {
      style: {
        width: '100%', // Giữ bảng vừa với container
      },
    },
  };
  const columns = [
    {
      name: "Customer Name",
      cell: (row) => {
        <div className="flex gap-1 items-center">
          <img src={row.avatar} alt="Avatar" className="size-6 rounded-full" />
          <span>{row.name}</span>
        </div>;
      },
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Order Value",
      selector: (row) => row.orderValue,
      sortable: true,
      right: true,
    },
  ];
  return (
    <div>
      <DataTable columns={columns} data={data} customStyles={customStyles}/>
    </div>
  );
};

export default DataTableNe;
