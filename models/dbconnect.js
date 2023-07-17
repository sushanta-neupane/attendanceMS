const mongoose = require('mongoose');
const uri = process.env.DB_URL;




export async function connectDB() {


  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


    console.log('Connected to MongoDB');



  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}


