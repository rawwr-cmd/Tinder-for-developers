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

function HomePage(props) {
  return <MeetUpList meetups={props.meetup} />;
}

export async function getStaticProps() {
  //fetch data from an api
  return {
    props: {
      meetup: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
