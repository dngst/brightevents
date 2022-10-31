import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Input from "components/Input";
import { Label, LabelText } from "components/Label";
import Button from "components/Button";

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
      <div className="event-row">
        <Paragraph>feb 23</Paragraph>
        <Paragraph><Link to="/events/1">Breaking The Fast</Link></Paragraph>
        <Paragraph>NAKURU</Paragraph>
        <Paragraph><Button primary>rsvp</Button></Paragraph>
      </div>
      <div className="event-row">
        <Paragraph>feb 23</Paragraph>
        <Paragraph><Link to="/events/1">Breaking The Fast</Link></Paragraph>
        <Paragraph>NAKURU</Paragraph>
        <Paragraph><Button primary>rsvp</Button></Paragraph>
      </div>
      <div className="event-row">
        <Paragraph>feb 23</Paragraph>
        <Paragraph><Link to="/events/1">Breaking The Fast</Link></Paragraph>
        <Paragraph>NAKURU</Paragraph>
        <Paragraph><Button primary>rsvp</Button></Paragraph>
      </div>
    </Container>
  );
};

export default ViewEvents;
