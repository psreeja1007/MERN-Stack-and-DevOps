import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            trim: true,
            required: true,
        },

        email:{
            type: String,
            trim: true,
            required: true,
        },

        phone:{
            type: String,
            trim: true,
            required: false,
        },

        password:{
            type: String,
            trim: true,
            required: true,
        },

        status:{
            type: String,
            trim: true,
            required: false,
        },

        role:{
            type: String,
            trim: true,
            required: false,
        }
        
    },

        {
            versionKey: false, timestamps: true,
        }
    
);


const User = mongoose.model("User", userSchema);

export default User;

