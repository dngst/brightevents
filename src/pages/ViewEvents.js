import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Input from "components/Input";
import { Label, LabelText } from "components/Label";

const ViewEvents = () => {
  return (
    <Container>
      <Helmet>
        <title>Events | Bright Events</title>
      </Helmet>
      <Title>browse events</Title>
      <Label htmlFor="event-search">
        <LabelText>search events by title, location, category</LabelText>
      </Label>
      <Input
        id="event-search"
        transparent
        autoFocus
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
