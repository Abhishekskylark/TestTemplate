import React from 'react'

function ClockInOut() {
  return (
    <>
     <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Clock In-Out</h3>
      <select className="border rounded p-1">
        <option>All Departments</option>
      </select>
    </div>
    {[
      { name: "Daniel Esabella", role: "UI/UX", clockIn: "09:15", status: "clock-in", time: "10:30 AM" },
      { name: "Douglas Martini", role: "Project Manager", clockIn: "09:36", status: "clock-in", time: "09:45 AM" },
      { name: "Brian Villalobos", role: "PHP Developer", clockIn: "09:15", status: "clock-out", time: "09:21 Hr" },
      { name: "Arthur Mckenzie", role: "Marketing Head", clockIn: "09:30 Min", status: "late", time: "09:35" },
    ].map((item) => (
      <div key={item.name} className="flex items-center mb-4">
        <img src="https://via.placeholder.com/40" alt={item.name} className="w-10 h-10 rounded-full" />
        <div className="ml-4 flex-1">
          <p className="font-semibold">{item.name}</p>
          <p className="text-gray-500">{item.role}</p>
        </div>
        <p className={item.status === "clock-in" ? "text-green-500" : item.status === "clock-out" ? "text-yellow-500" : "text-red-500"}>{item.clockIn}</p>
        <p className="ml-4">{item.time}</p>
      </div>
    ))}
    <a href="#" className="text-blue-500 text-sm block">View All</a>
  </div>
    </>
  )
}

export default ClockInOut