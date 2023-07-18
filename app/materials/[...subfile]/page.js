"use client"
import Materials from '@/components/Materials'
import React from 'react'

function page({params}) {
   

  return (
    <div className='main-container'>
        <Materials data={params.subfile}></Materials>

    </div>
  )
}

export default page