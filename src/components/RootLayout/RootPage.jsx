import React, { useEffect, useState } from "react";
import "./RootPage.css";
import OverviewItem from "./OverviewItem";
import { NavLink, Routes, Route } from "react-router-dom";
import DashBoard from "../../content/DashBoard";
import Teams from "../../content/Teams";
import Project from "../../content/Project";
import Analytics from "../../content/Analytics";
import Messages from "../../content/Message";
import Integration from "../../content/Integration";

const RootPage = () => {
  const [dataOverview, setDataOverview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setDataOverview(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const navItems = [
    {
      name: "Dashboard",
      to: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
          />
        </svg>
      ),
    },
    {
      name: "Project",
      to: "/project",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
          />
        </svg>
      ),
    },
    {
      name: "Teams",
      to: "/teams",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      name: "Analytics",
      to: "/analytics",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
          />
        </svg>
      ),
    },
    {
      name: "Messages",
      to: "/messages",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      ),
    },
    {
      name: "Integration",
      to: "/integration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="container border-[0.5px]">
      {/* Sidebar */}
      <div className="menu border-r border-gray-300 p-4 flex flex-col justify-between">
        <div>
          <img src="/src/assets/Image 1858.png" alt="Logo" />
          <ul className="flex flex-col gap-y-1 mt-6 [&>li]:p-1 [&>li]:rounded-lg ">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-3 rounded ${
                      isActive
                        ? "bg-[#f44b87] text-white font-bold"
                        : "hover:bg-[#fa8bb2] hover:text-white text-black"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Image */}
        <div className="flex flex-col justify-center items-center bg-[#f0f6ff] p-4 rounded-md">
          <img src="/src/assets/Group.png" alt="Update" />
          <p className="font-bold text-2xl my-3">V2.0 is available</p>
          <button className="bg-white rounded-md border border-blue-600 text-blue-600 w-full transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white">
            Try now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Header */}
        <div className="border-b border-gray-300 flex justify-between px-4 py-3 gap-2">
          <div className="text-[#f5538d] font-bold text-2xl">Dashboard</div>

          <div className="flex gap-3 items-center ">
            <div className="bg-[#f3f4f6] px-2 py-0.5 flex gap-1 text-black items-center rounded-lg w-[300px] transition-all duration-300 focus-within:outline-1 focus-within:outline-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                className="text-gray-600 focus:outline-none text-sm p-0.5 w-full"
                placeholder="Search ..."
              />
            </div>

            <div className="relative inline-block">
              {/* Ping Effect */}
              <span className="absolute top-0 right-0 inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#e84f85] opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e84f85]"></span>
              </span>

              {/* Your SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-black cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206 23.18 23.18 0 0 1-4.831 1.243 3.75 3.75 0 1 1-7.48 0A23.18 23.18 0 0 1 3.429 16.475a.75.75 0 0 1-.297-1.205A8.217 8.217 0 0 0 5.25 9.75V9Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="font-bold text-2xl text-black ml-2 mr-4 cursor-pointer">
              ?
            </h3>
            <img
              src="/src/assets/Avatar 313.png"
              alt="Avatar"
              className="rounded-full w-8 h-8 cursor-pointer"
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="px-4 py-1">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#e84f85]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="font-bold text-2xl">Overview</div>
          </div>

          <div className="flex gap-4 w-full justify-evenly mt-6">
            {dataOverview.map((item, index) => (
              <OverviewItem
                key={item.title}
                title={item.title}
                number={item.number}
                percent={item.percent}
                icon={item.icon}
                colorIndex={index}
              />
            ))}
          </div>
        </div>

        {/* Page Routing */}
        <div className="mt-10 px-4 py-1">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/project" element={<Project />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integration" element={<Integration />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
