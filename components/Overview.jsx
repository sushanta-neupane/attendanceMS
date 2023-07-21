"use client"
import Link from 'next/link';
import React ,{useState,useEffect} from 'react'
import { LineChart, XAxis,YAxis,CartesianGrid,Line,ResponsiveContainer,Tooltip } from 'recharts';
import {eachDayOfInterval,startOfMonth,endOfMonth,format} from 'date-fns'
function Overview() {

  const [noticeData, setNoticeData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);
  const now = new Date() 
  const thisMonth = now.getMonth() + 1 // July is month 7
  const thisYear = now.getFullYear()



   
    const getSelectedData =(sub)=>{
      const matches = attendanceData.filter(doc => {
        const docDate = new Date(doc.date)
        return doc[sub] && 
          docDate.getMonth() + 1 === thisMonth &&
          docDate.getFullYear() === thisYear 
      })

      return matches

    }

    console.log(getSelectedData)
   
// Generate array of all dates in month 
const dates = eachDayOfInterval({
  start: startOfMonth(new Date()),
  end: endOfMonth(new Date())
})

const data = dates.map(date => {

  // Format date for comparison
  const formatDate = format(date, 'yyyy-MM-dd');  

  // Find index of match
  const matches = getSelectedData("sub1").filter(item => {
    const itemDate = format(new Date(item.date), 'yyyy-MM-dd') 
    return itemDate === formatDate;
  });




  return {
    date: formatDate,
    count: matches ? matches.length : 0
  }  
})




 
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

    console.log(attendanceData)
  

    useEffect(() => {
    fetchNotices();

 
  }, []);

  return (
    <div className="main-container overview">
        <div className="graph">
         Class run : {attendanceData.length/35}
         <ResponsiveContainer>

         <LineChart  width={400} height={400} data={data}>
    <Line type="monotone" dataKey="count" stroke="#8884d8" />
    <XAxis dataKey="date" tick={()=>''} />
          <Tooltip/>
  </LineChart>
         </ResponsiveContainer>
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