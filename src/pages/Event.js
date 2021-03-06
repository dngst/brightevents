import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
const EventContainer = React.lazy(() =>
  import("components/container/EventContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Paragraph = React.lazy(() => import("components/Paragraph"));
const Button = React.lazy(() => import("components/Button"));

const Event = () => {
  const loggedIn = false;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <EventContainer>
        <Helmet>
          <title>Breaking the fast</title>
        </Helmet>
        <Title>breaking the fast</Title>
        <Paragraph className="event-loc">nakuru</Paragraph>
        <Paragraph capitalize className="event-details">
          tue, 1 feb, 2022, 11:00 AM - 2:00 PM
        </Paragraph>
        <Paragraph justify break className="event-desc">
          Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit dolore
          voluptate quis veniam non in ullamco consequat consectetur dolor
          labore adipisicing culpa ad do excepteur ut exercitation ut aliquip
          cupidatat voluptate labore.
        </Paragraph>
        <Paragraph justify className="event-cat">
          <Link to="#">#food</Link>
        </Paragraph>
        <div className="event-btns">
          <Button primary>rsvp</Button>
          {loggedIn && (
            <>
              <Link href="/update">
                <Button className="update-btn">update</Button>
              </Link>
              <Button>delete</Button>
            </>
          )}
        </div>
      </EventContainer>
    </Suspense>
  );
};

export default Event;
