"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
function page({params}) {
  const path = window.location.pathname; 
  const [fileslist,setFileslist] = useState([])
    const sem = path.split('/')[2];
    const type = path.split('/')[3];
   
    const fetchData = async () => {
      const drive = await (await fetch(`/api/folderid/?sem=${sem}&type=${type}`)).json(); 
      const {files} = drive
      setFileslist(files)
      
    
    }
  

  
    useEffect(() => {
      fetchData();
    }, []);

  return (
   <div className='main-container'>
    {fileslist.map((item)=>(
      <Link href={`https://drive.google.com/file/d/${item.id}/preview`}>
      <div className='subfolder'>
        {item.name}
      </div>
      </Link>
    ))}

   </div>
  )
}

export default page
