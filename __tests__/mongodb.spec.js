const dotenv = require("dotenv")
dotenv.config()

const { MongoClient } = require("mongodb");

beforeEach(() => {

})

afterEach(() => {

})

test('Test MongoDB Connection', async () => {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}.a631r.mongodb.net/test?authSource=admin&replicaSet=atlas-rmrgnf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`
  const testClient = new MongoClient(uri)
  await testClient.connect()

  expect(testClient).not.toBeNull()
  
  // Get Client Options i.e user, ssl enabled
  const clientOptions = testClient.s.options

  // Check the username and password passed to MongoClient match those set in the .env file
  expect(clientOptions.credentials.username).toBe(process.env.DB_USER)
  expect(clientOptions.credentials.password).toBe(process.env.DB_PASS)

  await testClient.close();
})