
import { NextResponse } from 'next/server';
import { useSearchParams } from 'next/navigation'
const connectDB = require('../../models/dbconnect');
const qs = require('qs');
const mongoose = require('mongoose');
const {loginData,studentData,attendanceData,materialData,eventsData} = require('../../models/schema');

var data = {};

export async function GET(request) {
  try{
      await connectDB();
      const queryURL = qs.parse(request.url.split('?')[1]).type;
      console.log(queryURL);
      switch (queryURL) {
        case '1':
        data = await loginData.find();
          
          break;
        case '2':
        data = await studentData.find();
          
          break;
        case '3':
        data = await attendanceData.find();
          
          break;
        case '4':
        data = await materialData.find();
          
          break;
        case '5':
        data = await eventsData.find();
          
          break;
      
        default:
        data = {};

          break;
      }
       await mongoose.connection.close()
        return NextResponse.json({ data });


  }
  catch(error)
  {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });

  }
  }
