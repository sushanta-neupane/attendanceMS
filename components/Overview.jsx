"use client"
import Link from 'next/link';
import React ,{useState,useEffect} from 'react'
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function Overview() {

  const [noticeData, setNoticeData] = useState([]);


  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${apiUrl}/notices?limit=2`, {
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
    <div className="main-container overview">
        <div className="graph">
            Graph (commming soon)
        </div>

        <div className="sub-overview">

            <div className="new-notice">
        <div className="head">New Notices</div>
            {noticeData.map((item,index)=>(
              <Link href={item.link}>
          <div key={index} className="notice-items new">
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