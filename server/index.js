const db = require("./db")
db.connectToDB();
const express = require("express");
const app = express();
var cors = require('cors');
const port = 4000; 
app.use(express.json());
app.use(cors());
const userapi = require("./routes/user.api");
const donaterequestapi = require("./routes/donaterequest.api");
const bloodrecordapi = require("./routes/bloodrecord.api");
const bloodrequestapi =  require("./routes/bloodrequest.api");
app.use("/user", userapi);
app.use("/donate", donaterequestapi);
app.use("/bloodrecord", bloodrecordapi);
app.use("/bloodrequest", bloodrequestapi);
app.listen(port, ()=>{
    console.log(`Listening at port: http://localhost:${port}`);
})

