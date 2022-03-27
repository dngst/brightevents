import { Helmet } from "react-helmet";
import { Link } from "wouter";
import LinesEllipsis from "react-lines-ellipsis";
import Container from "components/container/Container";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Card from "components/Card";
import Input from "components/Input";

const ViewEvents = () => {
  return (
    <Container>
      <Helmet>
        <title>Events | Bright Events</title>
      </Helmet>
      <Title>browse events</Title>
      <Input
        placeholder="search events by title, location, category"
        transparent
        className="center"
      />
      <Link to="/events/1">
        <div className="event-row">
          <Paragraph>feb 23</Paragraph>
          <Paragraph>Breaking The Fast</Paragraph>
          <Paragraph>NAKURU</Paragraph>
          <Paragraph>RSVP</Paragraph>
        </div>
      </Link>
      <Link to="/events/1">
        <div className="event-row">
          <Paragraph>feb 23</Paragraph>
          <Paragraph>Breaking The Fast</Paragraph>
          <Paragraph>NAKURU</Paragraph>
          <Paragraph>RSVP</Paragraph>
        </div>
      </Link>
      <Link to="/events/1">
        <div className="event-row">
          <Paragraph>feb 23</Paragraph>
          <Paragraph>Breaking The Fast</Paragraph>
          <Paragraph>NAKURU</Paragraph>
          <Paragraph>RSVP</Paragraph>
        </div>
      </Link>
    </Container>
  );
};

export default ViewEvents;
