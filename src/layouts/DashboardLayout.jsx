import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", flexWrap:"wrap"}}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout