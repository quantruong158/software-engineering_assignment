const express = require("express");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const printerRoute = require("./routes/printerRoute");
const authRoute = require("./routes/authRoute");

dotenv.config(); // do for .env file
//CONNECT DATABASE
mongoose
    .connect(process.env.MONGODB_URL)  // use .env file
    .then((success) => console.log("Connect Successfully to MongoDB"))
    .catch((err) => console.log(err.message));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors()); // deter from cross origin restriction error
//app.use(cookieParser());  maybe we can do cookie ?? thui xoa me no di
app.use(morgan("common")); // khi send API request -> inform in terminal

// app.get("/api",(req,res)=>{
//     res.status(200).json("Hello");
// });

//ROUTE
app.use("/v1/user", userRoute);
app.use("/v1/printer", printerRoute);
app.use("/v1/auth", authRoute);

app.listen(5500, () => {
    console.log("server is running ...");
});

//JWT xac thuc nguoi dung