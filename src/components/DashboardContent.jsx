import React from 'react'
import EmployeeStatus from './EmployeeStatus'
import AttendanceOverview from './AttendanceOverview'
import ClockInOut from './ClockInOut'
import EmployeeByDepartment from './EmployeeByDepartment'
import StatCard from './StatCard'

function DashboardContent() {
  return (
    <>
     <div className="p-6 bg-gray-50 min-h-screen">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/40" alt="profile" className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <h1 className="text-xl font-semibold">Welcome Back, Adrian</h1>
          <p className="text-gray-500">You have 21 Pending Approvals & 14 Leave Requests</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Add Requests</button>
      </div>
    </div>
    <div className="grid grid-cols-4 gap-6 mb-6">
      <StatCard icon="📅" title="Attendance" value="92/99" change="+2.1%" color="bg-orange-500" />
      <StatCard icon="📊" title="Total Projects" value="90/94" change="-2.1%" color="bg-teal-600" />
      <StatCard icon="👥" title="Total Clients" value="69/86" change="-11.2%" color="bg-blue-500" />
      <StatCard icon="✅" title="Total Tasks" value="25/28" change="+11.2%" color="bg-pink-500" />
      <StatCard icon="💰" title="Earnings" value="$2144" change="+10.2%" color="bg-purple-500" />
      <StatCard icon="📈" title="Profit This Week" value="$5,544" change="+2.1%" color="bg-red-500" />
      <StatCard icon="📋" title="Job Applicants" value="98" change="+14.2%" color="bg-green-500" />
      <StatCard icon="👤" title="New Hire" value="45/48" change="+11.2%" color="bg-gray-800" />
    </div>
    <div className="grid grid-cols-3 gap-6">
      <EmployeeStatus />
      <AttendanceOverview />
      <ClockInOut />
    </div>
    <EmployeeByDepartment />
  </div>
    </>
  )
}

export default DashboardContent