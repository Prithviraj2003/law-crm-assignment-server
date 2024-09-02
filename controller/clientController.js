const Client = require("../models/client");

const createClient = async (req, res) => {
  console.log(req.body);
  try {
    const client = new Client(req.body);
    console.log(client);
    await client.save();
    res.status(201).send(client);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await Client.find({}).populate("assignedAssociate","username");
    res.send(clients);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getClientNames = async (req, res) => {
  try {
    const clients = await Client.find({}, "name");
    res.send(clients);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id);
    if (!client) {
      return res.status(404).send();
    }
    Object.keys(req.body).forEach((key) => (client[key] = req.body[key]));
    await client.save();
    res.send(client);
  } catch (error) {
    res.status(400).send();
  }
};

const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) {
      return res.status(404).send();
    }
    res.send(client);
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  createClient,
  getClients,
  updateClient,
  getClientNames,
  deleteClient,
};
