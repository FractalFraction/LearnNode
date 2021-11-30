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

// Connect to a MongoDB database hosted on Mongo Atlas
const { MongoClient } = require("mongodb")
// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.a631r.mongodb.net/test?authSource=admin&replicaSet=atlas-rmrgnf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`
// Create a new MongoClient
const client = new MongoClient(uri)

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify a connection
    await client.db("admin").command({ping: 1})
    console.log("Connected sucessfully to MongoDB server")
  } finally {
    // Ensure the client closes when you finish or error
      await client.close();
  }
}

run().catch(console.dir);