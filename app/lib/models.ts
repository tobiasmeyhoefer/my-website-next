import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true
    }
  }
)

export const User = mongoose.models?.User || mongoose.model("User", userSchema)