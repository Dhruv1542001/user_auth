// src/controllers/userController.js
function getProfile(req, res) {
    console.log("In profile controller")
    const user = req.user; // Passport places the authenticated user in the request object
    res.json({ user });
  }
  
  module.exports = {
    getProfile,
  };
  