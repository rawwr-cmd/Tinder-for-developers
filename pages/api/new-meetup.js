import { MongoClient } from "mongodb";
//api/new-meetup
//POST /api/new-meetup
async function handler(req, res) {
  if (req.data === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = MongoClient.connect(
      "mongodb+srv://rawwr:akki4546@cluster0.z7irkml.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
