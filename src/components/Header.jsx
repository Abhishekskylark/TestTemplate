import React from 'react'

function Header({ toggleSidebar }) {
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white shadow">
                <div className="flex items-center">
                    <button onClick={toggleSidebar} className="mr-4">☰</button>
                    <span className="text-lg font-semibold">Admin Dashboard</span>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Search in HRMS" className="border rounded p-2" />
                    <span>CTRL + /</span>
                    <button className="text-gray-500">🔔</button>
                    <button className="text-gray-500">✉️</button>
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/32" alt="profile" className="w-8 h-8 rounded-full" />
                        <span className="ml-2">2025</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header