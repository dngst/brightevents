import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Input from "components/input/Input";
import Card from "components/Card";
import Paragraph from "components/Paragraph";

const ViewEvents = () => {
  return (
    <Container md>
      <Helmet>
        <title>Events | Bright Events</title>
      </Helmet>
      <Title>browse events</Title>
      <Input
        placeholder="search events by title, location, category"
        transparent
      />
      <Card>
        <Paragraph className="card-title">
          <span>1 feb</span> <Link to="event">breaking the fast</Link>
        </Paragraph>
        <Paragraph>
          Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit dolore
          voluptate...
        </Paragraph>
        <Paragraph className="event-cat">
          <Link to="#">#food</Link>
        </Paragraph>
      </Card>
    </Container>
  );
};

export default ViewEvents;
