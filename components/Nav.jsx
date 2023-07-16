import React from 'react'
import Image from 'next/image';
import * as bs from "react-icons/bs";
import Link from 'next/link'
const Nav = () => {
  return (
    <>
    <div className='navbar' >
    <div>
      <Link href='/'>
      
        <div className="account ">
          <div className="pp">
            <Image
            
            />
          </div>
          <div className="pdetail">SeM CSIT <br /> PN campus</div>
        </div>
        </Link>
     
        <div className="items">
           <Link href="/overview" style={{ textDecoration: 'none' }} ><div className="items-link"> <bs.BsBoundingBox className="icon" size={20}/> <span>Overview</span></div></Link> 

           <Link href="/attendance" style={{ textDecoration: 'none' }}>

            <div className="items-link"> <bs.BsFillFileSpreadsheetFill className="icon" size={20}/> <span>Overview</span></div>
           </Link>
           <Link href="/materials" style={{ textDecoration: 'none' }}>

            <div className="items-link"> <bs.BsFiles className="icon" size={20}/> <span>Materials</span></div>
           </Link>
           <Link href="/notices" style={{ textDecoration: 'none' }}>
            
            <div className="items-link"> <bs.BsFillBellFill className="icon" size={20} /> <span>Notices</span> </div>
           </Link>
           <Link href="/about" style={{ textDecoration: 'none' }}>

            <div className="items-link"> <bs.BsFillPersonLinesFill className="icon" size={20}/> <span>About</span></div>
           </Link>
        </div>
    </div>
        <div className="userSettings">
         <Link href="/chat">
         <div className="items-link setting"><bs.BsFillCloudFill className="icon" size={20}/> <span>Chat</span></div>
         </Link> 
          
          
        </div>

        
        
    </div>
    </>
  )
}

export default Nav