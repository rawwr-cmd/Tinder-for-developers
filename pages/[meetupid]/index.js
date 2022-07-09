import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetUpDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1517141772911-756dc840a94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80"
      title="A React Meetup"
      address="San Francisco, United States"
      description="The manual description"
    />
  );
}

export async function getStaticProps(context) {
  //fetch data from an api

  //the identifier from the square bracket
  const meetupId = context.params.meetupid;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.unsplash.com/photo-1517141772911-756dc840a94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80",
        id: meetupId,
        title: "A React Meetup",
        address: "San Francisco, United States",
        description: "The manual description",
      },
    },
  };
}

export default MeetUpDetails;
