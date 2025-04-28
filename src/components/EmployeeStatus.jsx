import React from 'react'

function EmployeeStatus() {
  return (
   <>
    <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Employee Status</h3>
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-3xl font-semibold">154</p>
        <p className="text-gray-500">Total Employee</p>
      </div>
      <div className="flex space-x-2">
        {[
          { label: "Fulltime (48%)", value: 112, color: "bg-yellow-400" },
          { label: "Contract (20%)", value: 112, color: "bg-teal-600" },
          { label: "Probation (22%)", value: 12, color: "bg-red-500" },
          { label: "WFH (20%)", value: 4, color: "bg-pink-500" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-xl font-semibold">{item.value}</p>
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center">
      <img src="https://via.placeholder.com/40" alt="top performer" className="w-10 h-10 rounded-full" />
      <div className="ml-4">
        <p className="font-semibold">Daniel Esabella</p>
        <p className="text-gray-500">IOS Developer</p>
      </div>
      <p className="ml-auto text-green-500 font-semibold">90%</p>
    </div>
    <a href="#" className="text-blue-500 text-sm mt-4 block">View All Employees</a>
  </div>
   </>
  )
}

export default EmployeeStatus