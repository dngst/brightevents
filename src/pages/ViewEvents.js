import { Helmet } from "react-helmet";
import { Link } from "wouter";
import LinesEllipsis from "react-lines-ellipsis";
import EventsContainer from "components/container/EventsContainer";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Card from "components/Card";
import Input from "components/Input";

const ViewEvents = () => {
  return (
    <EventsContainer>
      <Helmet>
        <title>Events | Bright Events</title>
      </Helmet>
      <Title>browse events</Title>
      <Input
        placeholder="search events by title, location, category"
        transparent
      />
      <Card>
        <Paragraph className="event-title">
          <span>1 feb</span> <Link to="event">breaking the fast</Link>
        </Paragraph>
        <LinesEllipsis
          maxLine="2"
          ellipsis="..."
          text="Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
            dolore voluptate quis veniam non in ullamco consequat consectetur
            dolor labore adipisicing culpa ad do excepteur ut exercitation ut
            aliquip cupidatat voluptate labore."
          trimRight
          basedOn="letters"
        />
        <Paragraph className="event-cat">
          <Link to="#">#food</Link>
        </Paragraph>
      </Card>
    </EventsContainer>
  );
};

export default ViewEvents;
