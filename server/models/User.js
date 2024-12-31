import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWM_5erpLaGiGfdEJhkIxm6HlhbxrKcxY6Yt4MgZY9Of9N72RrbrtXV4&s',
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);