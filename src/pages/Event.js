import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import Button from "components/Button";
import EventContainer from "components/container/EventContainer";

const Event = () => {
  const loggedIn = false;
  return (
    <EventContainer>
      <Helmet>
        <title>Breaking the fast</title>
      </Helmet>
      <Title>breaking the fast</Title>
      <Paragraph className="event-loc">nakuru</Paragraph>
      <Paragraph capitalize className="event-details">
        tue, 1 feb, 2022, 11:00 AM - 2:00 PM
      </Paragraph>
      <Paragraph justify break className="event-desc">
        Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit dolore
        voluptate quis veniam non in ullamco consequat consectetur dolor
        labore adipisicing culpa ad do excepteur ut exercitation ut aliquip
        cupidatat voluptate labore.
      </Paragraph>
      <Paragraph justify className="event-cat">
        <Link to="#">#food</Link>
      </Paragraph>
      <div className="event-btns">
        <Button primary>rsvp</Button>
        {loggedIn && (
          <>
            <Link href="/update">
              <Button className="update-btn">update</Button>
            </Link>
            <Button>delete</Button>
          </>
        )}
      </div>
    </EventContainer>
  );
};

export default Event;
