import React from 'react'

function Sidebar(isOpen) {
    return (
      <div className={`h-screen bg-gray-100 p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
      <div className="text-2xl font-bold text-orange-500 mb-6">SmartHR</div>
      <nav>
        <ul>
          {["Dashboard", "Applications", "Super Admin", "Layout", "Horizontal", "Detached", "Modern", "Two Column"].map((item) => (
            <li key={item} className="mb-3">
              <a href="#" className={`flex items-center p-2 rounded ${item === "Dashboard" ? "bg-orange-500 text-white" : "text-gray-600 hover:bg-gray-200"}`}>
                <span className="mr-2">{item === "Dashboard" ? "🏠" : "📄"}</span>
                {item}
                {item === "Dashboard" && <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded">Hot</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    )
}

export default Sidebar