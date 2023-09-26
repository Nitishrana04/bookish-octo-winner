const express = require('express');


const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB using mongoose
// mongoose.connect('mongodb+srv://nitishranajaat:9SU29HJkCXUaAJKW@cluster0.r6lwnbc.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });





const uri = "mongodb+srv://nitishranajaat:9SU29HJkCXUaAJKW@cluster0.r6lwnbc.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// Define your MongoDB schema and models here using mongoose

// Define your API routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
