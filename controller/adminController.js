const Admin = require("../models/admin");

const createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, "username");
    res.send(admins);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!admin) {
      return res.status(404).send();
    }
    res.send(admin);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  createAdmin,
  getAdmins,
  login,
};
