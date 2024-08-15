const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Company")
.then(() => {
    console.log("Connection Successful");
})
.catch((error) => {
    console.log(error);
})