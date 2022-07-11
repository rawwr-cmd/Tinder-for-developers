import { MongoClient } from "mongodb";
import MeetUpList from "../components/meetups/MeetUpList.js";

function HomePage(props) {
  return <MeetUpList meetups={props.meetups} />;
}

export async function getStaticProps() {
  //it holds context (params) and not req and res
  //fetch data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://rawwr:ZNeil69Rb23VvvII@cluster0.lefzbmb.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
