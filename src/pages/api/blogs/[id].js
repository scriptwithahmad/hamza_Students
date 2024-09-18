import blogsModel from "@/models/blogs";
import dbConnect from "@/config/dbConnect";

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

      

      break;

    default:
      break;
  }
}

