import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import EventsContainer from "components/container/EventsContainer";
const Title = React.lazy(() => import("components/Title"));
const Paragraph = React.lazy(() => import("components/Paragraph"));
const Input = React.lazy(() => import("components/Input"));
const Card = React.lazy(() => import("components/Card"));

const ViewEvents = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
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
          <Paragraph>
            Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
            dolore voluptate...
          </Paragraph>
          <Paragraph className="event-cat">
            <Link to="#">#food</Link>
          </Paragraph>
        </Card>
      </EventsContainer>
    </Suspense>
  );
};

export default ViewEvents;
