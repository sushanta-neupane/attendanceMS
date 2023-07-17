
import { NextResponse } from 'next/server';

import { connectDB } from '@/models/dbconnect';

const qs = require('qs');
const mongoose = require('mongoose');

import { materialData } from '@/models/schema';

var data = {};

export default async function GET(request) {
  try{
      await connectDB();
      const queryURL = qs.parse(request.url.split('?')[1]).type;
      
   
        data = await materialData.find();
        await mongoose.connection.close()
        return NextResponse.json({ data });


  }
  catch(error)
  {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });

  }
  }

  export  async function POST(request) {
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
  
    export const dynamic = 'force-dynamic' ;