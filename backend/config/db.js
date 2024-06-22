import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://greatstack:gLKs69HOeJBpEAAW@cluster0.j7uypnk.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
