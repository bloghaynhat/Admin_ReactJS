import React, { useEffect, useState } from "react";
import "./RootPage.css";
import OverviewItem from "./OverviewItem";
import DataTableNe from "../DataTable/DataTableNe";
import { Link } from "react-router-dom";

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
      <div className="menu border-r-1 border-gray-400 p-4 flex flex-col justify-between">
        {/* Logo + Navlink */}
        <div className="">
          <img src="/src/assets/Image 1858.png" alt="" />
          <div>
            <ul className="flex flex-col gap-y-5 mt-6 [&>li]:p-2 [&>li]:rounded-lg font-bold ">
              <li>
                <Link to="">Dashboard</Link>{" "}
              </li>
              <li>Project</li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>Analytics</li>
              <li>Messages</li>
              <li>Integration</li>
            </ul>
          </div>
        </div>
        {/* Img ben duoi */}
        <div className="flex flex-col justify-center items-center bg-[#f0f6ff] p-4 rounded-md">
          <img src="/src/assets/Group.png" alt="" />
          <p className="font-bold text-2xl my-3">V2.0 is available</p>
          <button className="bg-white rounded-md border border-blue-600 text-blue-600 w-full">
            Try now
          </button>
        </div>
      </div>
      {/* Đây là bên phải */}
      <div className="content">
        {/* Thanh header nè */}
        <div className="border-b-1 border-gray-400 flex justify-between p-2 gap-2 ">
          <div className="text-[#f5538d] font-bold text-2xl">Dashboard</div>

          <div className="flex gap-1 items-center">
            {/* Ô search */}
            <div className="bg-[#f3f4f6] px-2 py-0.5 flex gap-1 text-black items-center rounded-lg w-[300px] transition-all duration-300 focus-within:outline-1 focus-within:outline-black">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-3.5 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="text-gray-600 focus:outline-none text-[12px] p-0.5 w-full"
                placeholder="Search ..."
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-black font-bold mx-2"
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="font-bold text-2xl text-black ml-2 mr-4">?</h3>
            <img
              src="/src/assets/Avatar 313.png"
              alt=""
              className="rounded-full size-8"
            />
          </div>
        </div>
        <div className=" p-1">
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
            {dataOverview.map((item, index) => {
              return (
                <OverviewItem
                  title={item.title}
                  number={item.number}
                  percent={item.percent}
                  icon={item.icon}
                  colorIndex={index}
                />
              );
            })}
          </div>
        </div>

        {/* DataTable ne */}
        <div className="mt-10">
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
              <button className="text-[#f44b87] border-[#f44b87] border-[1.5px] flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Import
              </button>
              <button className="text-[#f44b87] border-[#f44b87] border-[1.5px] flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
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
          <DataTableNe />
        </div>
      </div>
    </div>
  );
};

export default RootPage;
