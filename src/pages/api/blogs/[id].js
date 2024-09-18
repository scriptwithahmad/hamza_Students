import blogsModel from "@/models/blogs";
import dbConnect from "@/config/dbConnect";
import { trackDynamicDataAccessed } from "next/dist/server/app-render/dynamic-rendering";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "GET":
      try {
        // getting id from url
        // console.log(req.query.id);

        // find those blogs based on id
        const getSingleBlog = await blogsModel.findById(req.query.id);

        // if no blog found
        if (!getSingleBlog) {
          return res.status(404).json({
            success: false,
            message: "blog Not found!",
          });
        }

        return res.status(200).json({
          status: true,
          getSingleBlog,
        });
      } catch (error) {
        console.log(error);
      }

    case "DELETE":


      try {

        // console.log(req.query.id)

        const delBlog = await blogsModel.findByIdAndDelete(req.query.id);

        if (!delBlog) {
          return res.status(200).json({
            status: false,
            message: "Blog Not found",
          });
        }

        return res.status(200).json({
          status: true,
          message: "Blog Deleted successfully",
        });

      } catch (error) {
        console.log(error);
      }

      break;

    case "PUT":

      try {

        const updateBlog = await blogsModel.findByIdAndUpdate(req.query.id, { ...req.body }, { new: true })


        // if no blog found
        if (!updateBlog) {
          return res.status(404).json({
            success: false,
            message: "blog Not found!",
          });
        }

        return res.status(200).json({
          status: true,
          message: "Blog Updated succesfully 😍",
          updateBlog,
        });


      } catch (error) {
        console.log(error)
      }

      break;


    default:
      break;
  }
}

