import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/user", (req, res) => {
  res.send(req.body);
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
