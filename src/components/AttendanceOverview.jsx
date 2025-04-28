import React from 'react'

function AttendanceOverview() {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Attendance Overview</h3>
      <select className="border rounded p-1">
        <option>Today</option>
      </select>
    </div>
    <div className="flex items-center justify-center mb-4">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-semibold">120</p>
        </div>
        <div className="absolute inset-0 bg-green-500 rounded-full" style={{ clipPath: "circle(50% at 50% 50%)", width: "50%" }}></div>
        <div className="absolute inset-0 bg-yellow-400 rounded-full" style={{ clipPath: "circle(50% at 50% 50%)", width: "75%", transform: "rotate(90deg)" }}></div>
        <div className="absolute inset-0 bg-red-500 rounded-full" style={{ clipPath: "circle(50% at 50% 50%)", width: "25%", transform: "rotate(180deg)" }}></div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Present", value: "59%", color: "text-green-500" },
        { label: "Late", value: "21%", color: "text-yellow-400" },
        { label: "Permission", value: "2%", color: "text-blue-500" },
        { label: "Absent", value: "15%", color: "text-red-500" },
      ].map((item) => (
        <div key={item.label} className="flex items-center">
          <span className={`w-4 h-4 rounded-full ${item.color.replace("text", "bg")} mr-2`}></span>
          <p>{item.label}: <span className={`font-semibold ${item.color}`}>{item.value}</span></p>
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-4">
      <p>Total Absenties <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded">11</span></p>
      <a href="#" className="text-blue-500 text-sm">View Details</a>
    </div>
  </div>
    </>
  )
}

export default AttendanceOverview