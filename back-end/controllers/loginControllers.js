const Login = require("../models/loginModel");
const mongoose = require("mongoose");

// GET /Login
const getAllLogins = async (req, res) => {
  try {
    const logins = await Login.find({}).sort({ createdAt: -1 });
    res.status(200).json(logins);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve Logins" });
  }
};

// POST /Logins 
const createLogin = async (req, res) => {
  try {
    const newLogin = await Login.create({ ...req.body });
    res.status(201).json(newLogin);
  } catch (error) {
    res.status(400).json({ message: "Failed to create Login", error: error.message });
  }
};
 
// GET /Logins/:loginId
const getLoginById = async (req, res) => {
  const { loginId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(loginId)) {
    return res.status(400).json({ message: "Invalid Login ID" });
  }

  try {
    const login = await Login.findById(loginId);
    if (login) {
      res.status(200).json(login);
    } else {
      res.status(404).json({ message: "Login not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve Login" });
  }
};

// PUT /Logins/:LoginId
// const updateLogin = async (req, res) => {
//   const { LoginId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(LoginId)) {
//     return res.status(400).json({ message: "Invalid Login ID" });
//   }

//   try {
//     const updatedLogin = await Login.findOneAndUpdate(
//         { _id: LoginId },
//         { ...req.body },
//         { new: true }
//     );
//     if (updatedLogin) {
//       res.status(200).json(updatedLogin);
//     } else {
//       res.status(404).json({ message: "Login not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Failed to update Login" });
//   }
// };
const updateLogin = async (req, res) => {
  const { loginId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(loginId)) {
    return res.status(400).json({ message: "Invalid Login ID" });
  }

  try {
    const updatedLogin = await Login.findOneAndReplace(
     { _id: loginId },
     { ...req.body },
   );

    if (updatedLogin) {
      res.status(200).json(updatedLogin);
    } else {
      res.status(404).json({ message: "Login not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Login" });
  }
};

// DELETE /Logins/:loginId
const deleteLogin = async (req, res) => {
  const { loginId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(loginId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const deletedLogin = await Login.findOneAndDelete({ _id: loginId });
    if (deletedLogin) {
      res.status(200).json({ message: "Login deleted successfully" });
    } else {
      res.status(404).json({ message: "Login not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Login" });
  }
};

module.exports = {
  getAllLogins,
  getLoginById,
  createLogin,
  updateLogin,
  deleteLogin,
};
