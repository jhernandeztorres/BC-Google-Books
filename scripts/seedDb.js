const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

db.Book.remove({}).then(() => db.Book.collection.insertMany(bookSeed)).then(data => {
    console.log(data.result.n + " record saved!");
    process.exit(0);
}).catch(error => { console.log(error);
process.exit(1)
});