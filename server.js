const express = require("express");
require("./config/db");
const {
  createClient,
  getClients,
  updateClient,
  deleteClient,
  getClientNames,
} = require("./controller/clientController");
const {
  createMatter,
  getAllMatters,
  updateMatter,
  deleteMatter,
} = require("./controller/matterController");
const {
  deleteTask,
  updateTask,
  getTasks,
  createTask,
} = require("./controller/taskController");
const cors = require("cors");
const { createAdmin, getAdmins, login } = require("./controller/adminController");
const app = express();
app.use(cors());
app.use(express.json());
const port = 8888;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//client apis
app.post("/clients", createClient);
app.get("/clients", getClients);
app.get("/clientsName", getClientNames);
app.patch("/clients/:id", updateClient);
app.delete("/clients/:id", deleteClient);

//matter apis
app.post("/matters", createMatter);
app.get("/matters", getAllMatters);
app.patch("/matters/:id", updateMatter);
app.delete("/matters/:id", deleteMatter);

//task apis
app.post("/tasks", createTask);
app.get("/tasks", getTasks);
app.patch("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);

//admin apis
app.post("/admins", createAdmin);
app.get("/admins", getAdmins);
app.post("/login", login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
