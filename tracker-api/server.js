const express = require('express');
const cors = require('cors');
require('dotenv').config();


const mongoose = require('mongoose');  
const uri = process.env.ATLAS_URI;  //database uri
mongoose.connect(uri, {useNewUrlParser: true});  //connect to database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  //middleware
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});