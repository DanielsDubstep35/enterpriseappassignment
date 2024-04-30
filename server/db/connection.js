import { MongoClient, ServerApiVersion } from "mongodb";

const uri = 'mongodb+srv://admin:admin@enterpriseappdev.qw9njjd.mongodb.net/?retryWrites=true&w=majority&appName=enterpriseAppDev';
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("VideoGames").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
} catch (err) {
    console.error(err);
}

let db = client.db("VideoGames");

export default db;
