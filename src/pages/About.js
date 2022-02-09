import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
const AboutContainer = React.lazy(() =>
  import("components/container/AboutContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Paragraph = React.lazy(() => import("components/Paragraph"));

const About = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <AboutContainer>
        <Helmet>
          <title>About | Bright Events</title>
        </Helmet>
        <Title>about</Title>
        <Paragraph>
          A platform for event organizers to create and manage different types
          of events while making them easily accessible to target markets.
        </Paragraph>
      </AboutContainer>
    </Suspense>
  );
};

export default About;
