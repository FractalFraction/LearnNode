// In this file you can configure migrate-mongo
const dotenv = require("dotenv")
const path = require('path')

// It works!!!
dotenv.config({path: path.resolve(process.cwd(), '../.env') })
console.log(process.env.DB_NAME)

const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.a631r.mongodb.net/FIRESTONES`,

    // TODO Change this to your database name:
    // databaseName: "FIRESTONES",

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog",

  // The file extension to create migrations and search for in migration dir 
  migrationFileExtension: ".js",

  // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determin
  // if the file should be run.  Requires that scripts are coded to be run multiple times.
  useFileHash: false
};

// Return the config as a promise
module.exports = config;
