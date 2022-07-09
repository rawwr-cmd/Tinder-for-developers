import { useEffect, useState } from "react";

import MeetUpList from "../components/meetups/MeetUpList.js";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First React Meetup",
    image:
      "https://images.unsplash.com/photo-1517141772911-756dc840a94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
    address: "San Francisco, United States",
    description: "React-meetup",
  },
  {
    id: "m2",
    title: "Next Js Meetup",
    image:
      "https://images.unsplash.com/photo-1517141772911-756dc840a94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
    address: "San Jose, Street 7",
    description: "NextJs-meetup",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  console.log("hi");

  useEffect(() => {
    console.log("in the use effect");
    //send a http reauest and fetch data
    //setLoadedMeetUps
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetUpList meetups={loadedMeetups} />;
}

export default HomePage;
