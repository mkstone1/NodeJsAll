const express = require("express");
const app = express();
app.use(express.json());

//Generates new id everytime its called
var generateId = (() => {
  var id = 1;
  return () => id++;
})();

let birds = [
  { id: generateId(), name: "TestBird" },
  { id: generateId(), name: "TestBird2" },
];

app.get("/testid", (req, res) => {
  res.send({ id: generateId() });
});

app.get("/birds", (req, res) => {
  res.send({ data: birds });
});

app.get("/birds/:id", (req, res) => {
  console.log(req.params.id);

  const foundBird = birds.find((bird) => bird.id === Number(req.params.id));

  res.send({ data: foundBird });
});

//Sending birds for easy debugging in postman
app.post("/birds", (req, res) => {
  const name = req.body.name;
  birds.push({ id: generateId(), name });
  res.send({ data: birds });
});

//Sending birds for easy debugging in postman
app.delete("/birds/:id", (req, res) => {
  birds = birds.filter((bird) => bird.id !== Number(req.params.id));

  console.log(req.params.id);
  res.send({data: birds});
});

//Sending birds for easy debugging in postman
app.patch("/birds/:id", (req, res) => {
  const name = req.body.name;
  const foundBird = birds.find((bird)=> bird.id === Number(req.params.id)).name = name;
  res.send({data: birds});

});



app.listen(8080, () => {
  console.log("server is running on port", 8080);
});
