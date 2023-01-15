const mongoose = require("mongoose");

const connectDatabase = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`connected to database`);
};

module.exports = connectDatabase;

//
// -----------------------------mongodb---------------------------------------------------
// ---------------------------------------------------------------------------------------
//

// const MongoClient = require("mongodb").MongoClient;

// Connect URL
// const url =
//   "mongodb+srv://rohit2301_:Toboduhan@imagescan.hhlzryv.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// const insert = async () => {
//   const database = client.db("imagescan");
//   const haiku = database.collection("haiku");

//   // create a document to insert
//   const doc = {
//     title: "Record of a Shriveled Datum",
//     content: "No bytes, no problem. Just insert a document, in MongoDB",
//   };
//   const result = await haiku.insertOne(doc);
//   console.log(`A document was inserted with the _id: ${result.insertedId}`);
// };

// const run = async () => {
//   try {
//     // const db = await client.connect();
//     await insert();

//     console.log(`db connected on ${url}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// run();

// module.exports = run;
