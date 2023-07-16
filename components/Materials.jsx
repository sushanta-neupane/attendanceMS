"use client"
import Link from "next/link";
import React, {useState, useEffect} from "react";

function Materials() {
  const path = window.location.pathname; 
  const folderid = '1QceEYxfhjBrlFRoIYjG2s0ogdDX9G3Ka';

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
    <div className="main-container materials">
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
  );
}

export default Materials;