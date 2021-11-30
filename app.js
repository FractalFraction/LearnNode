const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()
const port = process.env.APP_PORT
const path = require('path')

// Set the view engine to use pug
app.set("view engine", "pug")
app.set("views", "./views")

// Allow static files to be served
app.use('/static', express.static(path.join(__dirname, 'public')))

// Send some text to the index page
app.get("/", (req, res) => {
  //res.send("Hello, Colin!")
  res.render("index", {title: "App", message: "Hello World"})
})

// Message to log when server starts running
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
