
import { NextResponse } from 'next/server';
const qs = require('qs');

export  async function GET(request,response) {
    

    try{
        
    const driveapi = process.env.DRIVE_API_KEY ;
 
    const queryURL = qs.parse(request.url.split('?')[1]);
    const sem = queryURL.sem;
    const type = queryURL.type;
    const url = `https://www.googleapis.com/drive/v3/files?q='1QceEYxfhjBrlFRoIYjG2s0ogdDX9G3Ka'+in+parents&key=${driveapi}`

     
    const drive = await (await fetch(url)).json();

    const getIdForName = (data, name) => {
        const item = data.find(item => item.name.replace(/\s/g, '').toLowerCase() === name);
        return item ? item.id : null;
      }

    
      const id = getIdForName(drive.files, sem); 
       const newdrive = await (await fetch(`https://www.googleapis.com/drive/v3/files?q='${id}'+in+parents&key=${driveapi}`)).json();

       const nextid = getIdForName(newdrive.files, type); 

       const final = await (await fetch(`https://www.googleapis.com/drive/v3/files?q='${nextid}'+in+parents&key=${driveapi}`)).json();

    return NextResponse.json( final );


  }
  catch(error)
  {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });

  }
}


export const dynamic = 'force-dynamic' ;