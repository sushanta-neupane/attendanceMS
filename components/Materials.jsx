"use client"
import React, { useEffect,useState } from 'react';
import Link from 'next/link';



function Materials({data}) {

 
  const sem = data[0] === 'materials' ? '' : data[0] || '';
  const type = data[1]?data[1]:'';
  console.log(sem,type,data[data.length-1])
  
  const [fileId,setFileId] = useState("");

  const formatter =(a) =>{
    return a.replaceAll(' ','').toLowerCase()
  }

  const openFile = (e)=>{
    const value = e.target;
    const fileid = value.getAttribute('filevalue');
    const filetype = value.getAttribute('filetype');
    if(filetype != "application/vnd.google-apps.folder")
    {
      e.preventDefault(); 
      setFileId(fileid);
      
    }

  }

  const closePreview = () => {
    setFileId(''); 
  } 
  console.log(fileId)

  const [responseData,setResponse] = useState({});
  const fetchData = async() => {
    const data = await fetch(`/api/folderid?sem=${sem}&type=${type}`);
    const response = await data.json();
    setResponse(response)
    
  }
  console.log(responseData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

    {fileId &&(
      
  <div className="showfile">
    <div className="close btn" onClick={closePreview}> Close</div>
    <iframe src={`https://drive.google.com/file/d/${fileId}/preview`} width="100%" height="800" ></iframe>

  </div>
    )}

    <div className="main-container">
       {responseData && responseData.files && (
      <div className="folder">
        {responseData.files.map((item,index)=>(

        <Link  key={index} href={`./${data[data.length-1]}/`+formatter(item.name)}>
        <div className="subfolder" filevalue={item.id} filetype= {item.mimeType} onClick={openFile}>
          {item.name}
        </div>
        </Link>
        ))}
      </div>
       )}
    </div>

    </>
  );

}

export default Materials;