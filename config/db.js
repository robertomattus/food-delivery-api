import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://robertmatt113:9uOs0wUEjF2YyhXX@cluster0.ohruxhf.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
