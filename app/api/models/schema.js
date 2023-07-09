const mongoose  = require("mongoose");
//login credensials

const loginSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  

//user data schema
const studentSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required : true,
   
        },
        name:{
            type: String,
            required: true
        },
        roll:{
            type: Number,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        dob:{
            type: String,
            required: true
        },

        sem:{
            type: Number,
            required: true
        }

    }
);


// user Attendance

const attendanceSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required : true,
            unique : true
        },
        date: {
            type: Date,
            required: true,
          

          },

        sub1: {
            type: Boolean,
            required: true
          }  ,
        sub2: {
            type: Boolean,
            required: true
          }  ,
        sub3: {
            type: Boolean,
            required: true
          }  ,
        sub4: {
            type: Boolean,
            required: true
          }  ,
        sub5: {
            type: Boolean,
            required: true
          }  


    }
);


//materials

const materialSchema = new mongoose.Schema(
    {
        link:{
            type: String,
            required: true
        },
        sector:{
            type: String,
            required: true
        },
        sem:{
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
          },


    }
);


//notices

const eventsSchema = new mongoose.Schema(
    {
        head:{
            type: String,
            required: true
        },
        body:{
            type: String,
            required: true
        },
        link:{
            type: String,
            required: true
        },
        sector:{
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
          },


    }
);

//modals


const loginData = mongoose.models.Login || mongoose.model('Login',loginSchema)
const studentData = mongoose.models.Students || mongoose.model('Students',studentSchema)
const attendanceData = mongoose.models.Attendance || mongoose.model('Attendance',attendanceSchema)
const materialData = mongoose.models.Materials || mongoose.model('Materials',materialSchema)
const eventsData = mongoose.models.Events || mongoose.model('Events',eventsSchema)


module.exports = 
{
    loginData,
    studentData,
    attendanceData,
    materialData,
    eventsData
};