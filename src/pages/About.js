import { Helmet } from "react-helmet";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Container from "components/container/Container";

const About = () => {
  return (
    <Container>
      <Helmet>
        <title>About | Bright Events</title>
      </Helmet>
      <Title>about</Title>
      <Paragraph>
        A platform for event organizers to create and manage different types
        of events while making them easily accessible to target markets.
      </Paragraph>
    </Container>
  );
};

export default About;
