import blogsModel from "@/models/blogs";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "POST":
      try {
        //   destructure data form req.body (from frontend)
        const { title, category } = req.body;

        //   console.log(title, category);

        //   check all the field exists in frontend
        if (!title || !category) {
          return res.status(400).json({
            success: false,
            message: "Kindly Fill all the fields to proceed!",
          });
        }

        const addBlog = await blogsModel.create(req.body);

        return res.status(201).json({
          success: true,
          message: "blog Created successfully 😍",
          addBlog,
        });
      } catch (error) {
        console.log(error);
      }

      break;

    case "GET":
      try {
        const getBlogs = await blogsModel.find();

        if (!getBlogs) {
          return res.status(404).json({
            success: false,
            message: "No blogs found",
          });
        }

        return res.status(200).json({
          success: true,
          getBlogs,
        });
      } catch (err) {
        console.log(err);
      }

      break;

    default:
      break;
  }
}
