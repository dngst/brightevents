import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Paragraph from "components/Paragraph";

const ViewEvents = () => {
  return (
    <Container>
      <Helmet>
        <title>Events | Bright Events</title>
      </Helmet>
      <Title>browse events</Title>
      <div className="event-row">
        <Paragraph>feb 23</Paragraph>
        <Paragraph><Link to="/events/1">Breaking The Fast</Link></Paragraph>
        <Paragraph><span>NAKURU,</span> KENYA</Paragraph>
        <Paragraph>tix</Paragraph>
      </div>
      <div className="event-row">
        <Paragraph>feb 23</Paragraph>
        <Paragraph><Link to="/events/1">Breaking The Fast</Link></Paragraph>
        <Paragraph><span>NAKURU,</span> KENYA</Paragraph>
        <Paragraph>tix</Paragraph>
      </div>
      <div className="event-row">
        <Paragraph>feb 23</Paragraph>
        <Paragraph><Link to="/events/1">Breaking The Fast</Link></Paragraph>
        <Paragraph><span>NAKURU,</span> KENYA</Paragraph>
        <Paragraph>tix</Paragraph>
      </div>
    </Container>
  );
};

export default ViewEvents;
