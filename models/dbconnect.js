const mongoose = require('mongoose');
const uri = "mongodb+srv://dross:902dross@cluster0.ei9mvp4.mongodb.net/smstack?retryWrites=true&w=majority";





async function connectDB() {


  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });


    console.log('Connected to MongoDB');
    const db = mongoose.connection

  await db.collection('test').insertOne({name: 'test'})

  res.json({message: 'success!'})

  await db.close()


  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;