const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  clientType: {
    type: String,
    enum: ["Individual", "Corporate"],
    default: "Individual",
  },
  assignedAssociate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
