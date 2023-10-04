// src/controllers/userController.js
function getProfile(req, res) {
    console.log("In controller")
    const user = req.user; // Passport places the authenticated user in the request object
    console.log("user",user)
    res.json({ user });
  }
  
  module.exports = {
    getProfile,
  };
  