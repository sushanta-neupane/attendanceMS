"use client"
import Link from 'next/link';
import React ,{useState,useEffect} from 'react'


function Overview() {

  const [noticeData, setNoticeData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);


 
    const fetchNotices = async () => {
      try {
        const response = await fetch(`api/notices?limit=2`, {
          method: 'GET'
        });
        const response1 =  await fetch(`api/attendance`, {
          method: 'GET'
        });
        const data1 = await response1.json();
        setAttendanceData(data1.data);
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

    
  

    useEffect(() => {
    fetchNotices();

 
  }, []);

  return (
    <div className="main-container overview">
        <div className="graph">
         Class run : {attendanceData.length/35}
        </div>

        <div className="sub-overview">

            <div className="new-notice">
        <div className="head">New Notices</div>
            {noticeData.map((item,index)=>(
              <Link key={index} href={item.link}>
          <div  className="notice-items new">
          <div className="fadetext new">{item.date.split('T')[0]} </div>
              <div className="notice-head new">  {item.head}</div>
              <div className="notice-sub new"> {item.body}</div>

          </div>
          </Link>

          ))}
            </div>

            <div className="portfolio">
                <div className="head">Comming soon feature</div>
                  <div className="subhead">Sthg Interesting</div>
                
            </div>
        </div>  
    </div>
  )
}

export default Overview