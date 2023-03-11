const express = require("express");
const createConnection = require("./lib/boot");
const cors = require("cors");
const router = require("./routes/routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("", router);
createConnection(app);
