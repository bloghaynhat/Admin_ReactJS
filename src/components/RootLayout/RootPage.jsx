import React, { useEffect, useState } from "react";
import "./RootPage.css";
import OverviewItem from "./OverviewItem";
import DataTableNe from "../DataTable/DataTableNe";

const RootPage = () => {
  const [dataOverview, setdataOverview] = useState([]);
  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchData = async () => {
      try {
        // Gọi API
        const response = await fetch(
          "https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview"
        );
        // Kiểm tra nếu response không ok
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Chuyển đổi phản hồi sang JSON
        const result = await response.json();

        // Cập nhật dữ liệu vào state
        setdataOverview(result);
      } catch (error) {
        console.log(error);
      }

      fetchData();
    };

    // Gọi hàm fetchData
    fetchData();
  }, []);

  return (
    <div className="container">
      {/* Menu nè */}
      <div className="menu bg-blue-400">
        <h1>Logo</h1>
        <div>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
          </ul>
        </div>
      </div>
      {/* Đây là bên phải */}
      <div className="content">
        {/* Thanh header nè */}
        <div className=" bg-blue-400 flex justify-between p-1">
          <div className="text-[#f5538d] font-bold text-2xl">Dashboard</div>

          <div className="flex gap-1">
            {/* Ô search */}
            <div>
<input type="text" />
            </div>
            
            <button></button>
            <h3>?</h3>
            <img src="" alt="" />
          </div>
        </div>
        <div className=" bg-blue-400 p-1">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-[#e84f85]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="font-bold text-2xl">Over view</div>
          </div>

          <div className="flex w-full justify-evenly mt-6">
            {dataOverview.map((item) => {
              return (
                <OverviewItem
                  title={item.title}
                  number={item.number}
                  percent={item.percent}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>

        <div className=" bg-blue-400 border">
          {/* <DataTableNe/> */}
        </div>
      </div>
    </div>
  );
};

export default RootPage;
