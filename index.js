const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// use Middleware 
app.use(cors());
app.use(express.json());

// username: dbuser1
// password: NdkWOo32lMOqAWKw

const uri = "mongodb+srv://dbuser1:NdkWOo32lMOqAWKw@cluster0.zsms8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
  try{
    await client.connect();
    const userCollection = client.db('foodExpress').collection('user');

    const 
  }
  finally{

  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
  res.send('Running My Node CRUD Server');
});

app.listen(port, ()=>{
  console.log('CRUD Server is Running');
});