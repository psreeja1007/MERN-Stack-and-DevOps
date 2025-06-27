import dotenv from "dotenv"
dotenv.config();

import express from "express"
import cors from  "cors"
import bodyParser from "body-parser"

import connectToDatabase from "./config/database.js";

//import routes
import AuthRouter from "./routes/auth.js"
import ProductRouter from "./routes/products.js";

const app= express();

app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({limit : '50mb', extended: true}));

app.get('/' , (req,res) => {
       res.send("server is running")
    })

//Auth Routes

app.use("/api/v1/user", AuthRouter);
app.use("/api/v1/product", ProductRouter);


const startServer = async ()=> {
    
     try{
         const PORT=process.env.PORT || 9000;
         const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/e-commerce"

         await connectToDatabase(DB_URL);
         app.listen(PORT, () => {
             console.log(` Server is listening on port : ${PORT}`);
         })
     } catch(error){
         console.log(error);
         exit(1)
     }

}

startServer();
