import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.users || mongoose.model("users", UsersSchema);
