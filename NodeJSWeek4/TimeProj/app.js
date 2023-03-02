const express = require("express");
const app = express();

app.use(express.static("public"));



/* Pages */

console.log(__dirname)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/time.html");
});


/* API */


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});