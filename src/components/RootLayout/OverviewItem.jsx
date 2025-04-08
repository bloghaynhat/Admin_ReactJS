import React from "react";

const OverviewItem = ({ title, number, percent, icon, colorIndex }) => {
  // Giải mã chuỗi SVG (thay thế các ký tự escape)
  const decodedIcon = decodeURIComponent(icon);

  return (
    <div
      className={`${
        colorIndex !== 2 ? "bg-[#fadbe6]" : "bg-[#d7e1e9]"
      } py-3 px-5 w-[340px] rounded-lg relative flex-1`}
    >
      <h3 className="font-bold text-black">{title}</h3>
      <h2 className="font-bold text-4xl mt-2 text-black">
        {colorIndex !== 2 ? `$${number}` : number}
      </h2>
      <h4 className="text-[12px] mt-4 flex items-center text-black font-semibold gap-1">
        <span className="text-[#387b59] flex items-center">▲{percent}</span>{" "}
        period of change
      </h4>

      {/* Chèn SVG từ chuỗi đã giải mã */}
      <span
        className={`${
          colorIndex !== 2
            ? "text-[#e84f85] border-[#e84f85]"
            : "text-[#2b80ff] border-[#2b80ff]"
        } absolute top-2 right-2 text-xl  border  p-1 rounded-md`}
        dangerouslySetInnerHTML={{ __html: decodedIcon }}
      />
    </div>
  );
};
export default OverviewItem;
