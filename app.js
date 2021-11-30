const express = require("express")
const app = express()
const port = 3000

// Set the view engine to use pug
app.set("view engine", "pug")
app.set("views", "./views")

// Send some text to the index page
app.get("/", (req, res) => {
  //res.send("Hello, Colin!")
  res.render("index", {title: "App", message: "Hello World"})
})

// Message to log when server starts running
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
