import { Helmet } from "react-helmet";
import AboutContainer from "components/container/AboutContainer";
import Title from "components/Title";
import Paragraph from "components/Paragraph";

const About = () => {
  return (
    <AboutContainer>
      <Helmet>
        <title>About | Bright Events</title>
      </Helmet>
      <Title>about</Title>
      <Paragraph>
        A platform for event organizers to create and manage different types of
        events while making them easily accessible to target markets.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
