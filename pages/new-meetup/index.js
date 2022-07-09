//ourdomain.com/new-meetup.js
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
