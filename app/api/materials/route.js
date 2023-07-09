
import { NextResponse } from 'next/server';

const connectDB = require('../models/dbconnect');
const qs = require('qs');

const {materialData} = require('../models/schema');

var data = {};

export async function GET(request) {
  try{
      await connectDB();
      const queryURL = qs.parse(request.url.split('?')[1]).type;
      
   
        data = await materialData.find();
          
        return NextResponse.json({ data });


  }
  catch(error)
  {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });

  }
  }

  export async function POST(request) {
    try{
        await connectDB();

        const res = await request.json()
        const formData = new materialData(res);
        await formData.save();  
      
        
        return NextResponse.json( {res} );
  
  
    }
    catch(error)
    {

      console.error('Error to upload :', error);
      return NextResponse.json({ error });
  
    }
    }
  
