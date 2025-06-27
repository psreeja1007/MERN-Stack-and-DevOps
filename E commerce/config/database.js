import mongoose from "mongoose";


// connect to database

const connectToDatabase = async (url) => {
      try{
        return mongoose.connect(url)
        .then(() => {
            console.log("Database Connected Successfully!!")
        })
        .catch((e) => {
            console.log(e)
        })
      } catch(error){
          console.log(error)
      }
}

export default connectToDatabase;