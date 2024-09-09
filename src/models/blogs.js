import mongoose, { Mongoose } from "mongoose";

const blogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title Required"],
    },
    desc: {
      type: String,
      required: [true, "Description Required"],
    },
    category: {
      type: String,
      required: [true, "Category Required"],
    },
    image: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.models.blogs || mongoose.model("blogs", blogsSchema);
