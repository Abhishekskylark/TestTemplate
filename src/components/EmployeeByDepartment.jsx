import React from 'react'

function EmployeeByDepartment() {
  return (
   <>
    <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Employees By Department</h3>
      <select className="border rounded p-1">
        <option>This Week</option>
      </select>
    </div>
    {[
      { dept: "UI/UX", value: 100, color: "bg-orange-500" },
      { dept: "Development", value: 80, color: "bg-orange-500" },
      { dept: "Management", value: 60, color: "bg-orange-500" },
      { dept: "HR", value: 40, color: "bg-orange-500" },
      { dept: "Testing", value: 30, color: "bg-orange-500" },
      { dept: "Marketing", value: 20, color: "bg-orange-500" },
    ].map((item) => (
      <div key={item.dept} className="flex items-center mb-2">
        <span className="w-24">{item.dept}</span>
        <div className="flex-1 h-4 bg-gray-200 rounded">
          <div className={`${item.color} h-full rounded`} style={{ width: `${item.value}%` }}></div>
        </div>
        <span className="ml-2">{item.value}</span>
      </div>
    ))}
    <p className="text-sm text-gray-500 mt-2">No. of Employees Increased by 40% from last week</p>
  </div>
   </>
  )
}

export default EmployeeByDepartment