import React from 'react'

const OverviewItem = ({ title, number, percent, icon }) => {
    // Giải mã chuỗi SVG (thay thế các ký tự escape)
    const decodedIcon = decodeURIComponent(icon);

    return (
        <div className='bg-white py-2 px-2 w-[300px] rounded-lg relative'>
            <h3 className='font-bold text-black'>{title}</h3>
            <h2 className='font-bold text-5xl mt-2  text-black'>{number}</h2>
            <h4 className='text-[12px] mt-4 flex items-center text-black font-semibold gap-2'><span className='text-[#387b59] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
                {percent}</span>period of change</h4>

            {/* Chèn SVG từ chuỗi đã giải mã */}
            <span className="absolute top-2 right-2 text-xl text-[#e84f85] border border-[#e84f85] p-1 rounded-md"
                dangerouslySetInnerHTML={{ __html: decodedIcon }} />

        </div>
    )
}
export default OverviewItem
