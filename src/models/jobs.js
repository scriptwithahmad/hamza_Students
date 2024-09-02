import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema(
  {
    title: {
      trim: true,
      type: String,
      required: [true, "Title is required"],
    },
    desc: {
      trim: true,
      type: String,
      required: [true, "Description is required"],
    },
    skills: {
      type: Array,
    },
    benifits: {
      type: Array,
    },
    location: {
      type: String,
    },
    employmentType: {
      type: String,
      required: [true, "Employment type is required"],
      enm: ["Full Time", "Part Time", "Contract", "Internship", "Remote"],
    },
    offeredSalary: {
      type: String,
    },
    experience: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.jobs || mongoose.model("jobs", JobsSchema);
