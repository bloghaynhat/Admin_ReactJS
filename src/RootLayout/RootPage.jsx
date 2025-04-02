import React from 'react'
import "../RootLayout/RootPage.css"

const RootPage = () => {
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
                    <h2>Over view</h2>

                    <div className='flex w-full justify-evenly'>
                        <div className='bg-gray-600 rounded-md px-10 py-4'>aaa</div>
                        <div className='bg-gray-600 rounded-md px-10 py-4'>aaa</div>
                        <div className='bg-gray-600 rounded-md px-10 py-4'>aaa</div>
                        <div className='bg-gray-600 rounded-md px-10 py-4'>aaa</div>
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
