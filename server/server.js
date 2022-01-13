const express = require("express");
const cors = require("cors");
const insuranceRouter = require("./routes/insurances");
const hospitalsRouter = require("./routes/hospitals");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/insurance", insuranceRouter);
app.use("/hospitals", hospitalsRouter);

app.listen(8080, () => {
    console.log(`listening on port ${PORT}.`);
})