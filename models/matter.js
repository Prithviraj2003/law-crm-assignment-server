const mongoose = require('mongoose');

const MatterSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client', // Referencing the Client model
    required: true,
  },
  matterType: {
    type: String,
    required: true,
  },
  assignedAssociate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Referencing the Admin model
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low',
  },
  estimatedHours: {
    type: Number,
    required: true,
  },
  actualHours: {
    type: Number,
  },
  billingStatus: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Matter = mongoose.model('Matter', MatterSchema);

module.exports = Matter;
