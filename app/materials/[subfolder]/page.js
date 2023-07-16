"use client"
import React,{useState,useEffect} from 'react'
import Link from 'next/link';
function page({params}) {
    console.log(params.subfolder[0])
    const path = window.location.pathname; 

    const folderid = '1NHnH2L5GQgBrpTzlT8P8f_pNX3kvLZJG';

    const [filesList, setFiles] = useState([]);
  
    const fetchData = async () => {
      const {drive} = await (await fetch(`/api/folderfetch/?id=${folderid}`)).json(); 
      const {files} = drive;
      setFiles(files);
    }
  
    const handleClick = (e) =>{
  console.log(e.target.id)
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
   <div className='main-container'>
{filesList.map(item => (
        <Link href={`${path}/${item.name.replace(/\s/g, '').toLowerCase()}`}>
        <div key={item.id} className="folder">
         
          <div id={item.id} onClick={ handleClick } className="subfolder">
            {item.name}     
          </div>
     
        </div>
        </Link>
      ))}
   </div>
  )
}

export default page
