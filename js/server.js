const PORT = 8000;
const axios = require("axios").default;
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen();
