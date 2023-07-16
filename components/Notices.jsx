
"use client"
import Link from 'next/link';
import React ,{useState,useEffect} from 'react'
import * as bs from "react-icons/bs"
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
function Notices() {
    const [noticeData, setNoticeData] = useState([]);


  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`api/notices`, {
          method: 'GET'
        });

        if (response.ok) {
          const data = await response.json();
          setNoticeData(data.data);
        } else {
          console.log('Error in fetching notices');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchNotices();
  }, []);

      
  return (

    
   <div className="notices main-container">
{noticeData.map((item,index)=>(
<Link href={item.link} >
    <div key={index} className="notice-items">
     <bs.BsFillPinMapFill className="icon-l" /> <div className="fadetext">{item.date.split('T')[0]} </div>
        <div className="notice-head">  {item.head}</div>
        <div className="notice-sub"> {item.body}</div>

    </div>
    </Link>
))}
    


   </div>
  )
}

export default Notices