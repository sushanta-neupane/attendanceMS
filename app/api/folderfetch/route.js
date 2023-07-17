
import { NextResponse } from 'next/server';
const qs = require('qs');

export  async function GET(request,response) {
    

    try{
        
    const driveapi = process.env.DRIVE_API_KEY ;
 
    const queryURL = qs.parse(request.url.split('?')[1]);
    const folderid = queryURL.id;
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderid}'+in+parents&key=${driveapi}`

     
    const drive = await (await fetch(url)).json();

    console.log(drive); 



    return NextResponse.json({ drive });


  }
  catch(error)
  {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });

  }
}

export const dynamic = 'force-dynamic' ;