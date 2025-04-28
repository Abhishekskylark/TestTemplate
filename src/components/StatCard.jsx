import React from 'react'

function StatCard({ icon, title, value, change, color }) {
  return (
   <>
  
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
        <span className="text-white">{icon}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-xl font-semibold">{value}</p>
        <p className={`text-sm ${change.includes("+") ? "text-green-500" : "text-red-500"}`}>{change}</p>
        <a href="#" className="text-blue-500 text-sm">View All</a>
      </div>
    </div>
  </div>

   </>
  )
}

export default StatCard