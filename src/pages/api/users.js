import usersModel from "@/models/users";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  //   destructure data form req.body (from frontend)
  const { fullName, email, password, phone } = req.body;

  //   console.log(fullName, email, password, phone);

  //   check all the field exists in frontend
  if (!fullName || !email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: "Kindly Fill all the fields to proceed!",
    });
  }
  
}
