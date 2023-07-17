import { NextResponse } from 'next/server';

import { connectDB } from '@/models/dbconnect';

const qs = require('qs');
const mongoose = require('mongoose');

import { subjectData } from '@/models/schema';

const semesterData = [
  {
    sem: 1,
    subjects: [
      { code: "CSC109", title: "Introduction to Information Technology", creditHour: 3 },
      { code: "CSC110", title: "C Programming", creditHour: 3 },
      { code: "CSC111", title: "Digital Logic", creditHour: 3 },
      { code: "MTH112", title: "Mathematics I", creditHour: 3 },
      { code: "PHY113", title: "Physics", creditHour: 3 },
    ],
  },
  {
    sem: 2,
    subjects: [
      { code: "CSC160", title: "Discrete Structure", creditHour: 3 },
      { code: "CSC161", title: "Object Oriented Programming", creditHour: 3 },
      { code: "CSC162", title: "Microprocessor", creditHour: 3 },
      { code: "MTH163", title: "Mathematics II", creditHour: 3 },
      { code: "STA164", title: "Statistics I", creditHour: 3 },
    ],
  },
  {
    sem: 3,
    subjects: [
      { code: "CSC206", title: "Data Structure and Algorithm", creditHour: 3 },
      { code: "CSC207", title: "Numerical Method", creditHour: 3 },
      { code: "CSC208", title: "Computer Architecture", creditHour: 3 },
      { code: "CSC209", title: "Computer Graphics", creditHour: 3 },
      { code: "STA210", title: "Statistics II", creditHour: 3 },
    ],
  },
  {
    sem: 4,
    subjects: [
      { code: "CSC257", title: "Theory of Computation", creditHour: 3 },
      { code: "CSC258", title: "Computer Networks", creditHour: 3 },
      { code: "CSC259", title: "Operating System", creditHour: 3 },
      { code: "CSC260", title: "Database Management System", creditHour: 3 },
      { code: "CSC261", title: "Artificial Intelligence", creditHour: 3 },
    ],
  },
  {
    sem: 5,
    subjects: [
      { code: "CSC314", title: "Design and Analysis of Algorithm", creditHour: 3 },
      { code: "CSC315", title: "System Analysis and Design", creditHour: 3 },
      { code: "CSC316", title: "Cryptography", creditHour: 3 },
      { code: "CSC317", title: "Simulation and Modeling", creditHour: 3 },
      { code: "CSC318", title: "Web Technology", creditHour: 3 },
      { code: "Elective I", title: "N/A", creditHour: 3 },
    ],
  },
  {
    sem: 6,
    subjects: [
      { code: "CSC364", title: "Software Engineering", creditHour: 3 },
      { code: "CSC365", title: "Computer Design and Construction", creditHour: 3 },
      { code: "CSC366", title: "E-Governance", creditHour: 3 },
      { code: "CSC367", title: "NET Centric Computing", creditHour: 3 },
      { code: "CSC368", title: "Technical Writing", creditHour: 3 },
      { code: "Elective II", title: "N/A", creditHour: 3 },
    ],
  },
  {
    sem: 7,
    subjects: [
      { code: "CSC409", title: "Advanced Java Programming", creditHour: 3 },
      { code: "CSC410", title: "Data Warehousing and Data Mining", creditHour: 3 },
      { code: "MGT411", title: "Principles of Management", creditHour: 3 },
      { code: "CSC412", title: "Project Work", creditHour: 3 },
      { code: "Elective III", title: "N/A", creditHour: 3 },
    ],
  },
  {
    sem: 8,
    subjects: [
      { code: "CSC461", title: "Advanced Database", creditHour: 3 },
      { code: "CSC462", title: "Internship", creditHour: 6 },
      { code: "Elective IV", title: "N/A", creditHour: 3 },
    ],
  },
];




export async function GET(request) {
  try {
    await connectDB();
    const limit = qs.parse(request.url.split('?')[1]);
    const savedData = await subjectData.find();
    

     await mongoose.connection.close()
    return NextResponse.json({ data: savedData });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ error });
  }
}


export const dynamic = 'force-dynamic' ;