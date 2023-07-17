
import { NextResponse } from 'next/server';

const connectDB = require('../../../models/dbconnect');
const qs = require('qs');
const mongoose = require('mongoose');
const {eventsData} = require('../models/schema');

var data = {};

export async function GET(request) {
  try{
      await connectDB();
      const limit = qs.parse(request.url.split('?')[1]).limit;
      
   
        data = await eventsData.find().sort({_id:-1}).limit(limit);
          
        mongoose.connection.close()
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
        const formData = new eventsData(res);
        await formData.save();  
      
        
       await mongoose.connection.close()
        return NextResponse.json( {res} );
  
    }
    catch(error)
    {

      console.error('Error to upload :', error);
      return NextResponse.json({ error });
  
    }
    }
  
