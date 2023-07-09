import Admin from '@/components/admin/Admin'
import User from '@/components/admin/User'

import Notices from '@/components/admin/Notices'
import Attendance from '@/components/admin/Attendance'
import React from 'react'

function page() {
  return (
    <div className="main-container">

    {/* <Admin/> */}
    {/* <User/> */}
    <Notices/>
    <Attendance/>
    </div>
  )
}

export default page