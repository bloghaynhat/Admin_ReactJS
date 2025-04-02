import React, { useEffect, useState } from 'react'
import "../RootLayout/RootPage.css"
import OverviewItem from './OverviewItem';

const RootPage = () => {
    const [dataOverview, setdataOverview] = useState([]);
    useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchData = async () => {
        try {
          // Gọi API
          const response = await fetch('https://67c7c637c19eb8753e7ab0ce.mockapi.io/Overview');
          // Kiểm tra nếu response không ok
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Chuyển đổi phản hồi sang JSON
          const result = await response.json();
          
          // Cập nhật dữ liệu vào state
          setdataOverview(result);
        } catch(error){
            console.log(error);
        }

        fetchData();
      };
  
      // Gọi hàm fetchData
      fetchData();
    }, [])




    return (
        <div className='container'>
            {/* Menu nè */}
            <div className='menu bg-blue-400'>
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
            <div className='content'>
                {/* Thanh header nè */}
                <div className=' bg-blue-400 flex justify-between'>
                    <h1>Dashboard</h1>

                    <div className='flex gap-1'>
                        <input type="text" />
                        <button></button>
                        <h3>?</h3>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className=' bg-blue-400 '>
                    <div className='font-bold text-2xl'>Over view</div>

                    <div className='flex w-full justify-evenly mt-6'>
                        {dataOverview.map((item) => {
                            return <OverviewItem title={item.title} number={item.number} percent={item.percent} icon={item.icon}/>
                        })}
                    
                    </div>
                </div>
                <div className=' bg-blue-400 border'>
                    <table className='w-full'>
                        <tr >
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr >
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default RootPage
