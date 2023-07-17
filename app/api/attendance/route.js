
import { NextResponse } from 'next/server';

const connectDB = require('../../../models/dbconnect');
const qs = require('qs');

const {attendanceData} = require('../../../models/schema');
const mongoose = require('mongoose');
var data = {};

export async function GET(request) {
  try {
    await connectDB();
    const queryURL = qs.parse(request.url.split('?')[1]);
    const id = queryURL.id;
    const date = queryURL.date;

    let data;

    if (date && id) {
      // Query data based on the provided date and id
      data = await attendanceData.find({ id, date });
    } else if (date) {
      // Query data based on the provided date
      data = await attendanceData.find({ date });
    } else if (id) {
      // Query data based on the provided id
      data = await attendanceData.find({ id });
    } else {
      // Fetch all data if no date or id is provided
      data = await attendanceData.find();
    }
    await mongoose.connection.close()
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });
  }
}


  export async function POST(request) {
    try {
      await connectDB();
  
      const requestData = await request.json();
  
      for (const data of requestData) {
        const existingData = await attendanceData.findOne({
          id: data.id,
          date: data.date,
        });
  
        if (existingData) {
          // Update existing data
          await attendanceData.findOneAndUpdate(
            { id: data.id, date: data.date },
            data
          );
        } else {
          // Save new data
          const formData = new attendanceData(data);
          await formData.save();
        }
      }
     await mongoose.connection.close()
  
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error during upload:', error);
      return NextResponse.json({ error });
    }
  }
  