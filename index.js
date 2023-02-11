const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Importing the schema model
const Note = require('./models/note');


const app = express();

// use this function if we want to use the body parser whole project
// extended : true  (you can send the nested objects)
// extended : false  (you can not send the nested objects)
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


// Mongoose connection 
url = "mongodb+srv://rashid:rashid@cluster0.hyfjikr.mongodb.net/notesdb";
// When strict query mode is enabled, Mongoose will only return fields that are defined in your schema.
mongoose.set('strictQuery', true);


const client = mongoose.connect(url).then(() => {

    // Home Route ("/")
    app.get("/", function (req, res) {
        // res.send("This is the Home Page");
        const response = { statuscode: res.statusCode ,message : "Api works! "};
        res.json(response);
    });

    const noteRouter = require('./routes/Note')
    app.use('/notes',noteRouter);

});



// Starting the server on a PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started on PORT: " + PORT);
});
