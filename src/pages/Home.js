import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
const HomeContainer = React.lazy(() =>
  import("components/container/HomeContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Button = React.lazy(() => import("components/Button"));

const Home = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HomeContainer>
        <Helmet>
          <title>Bright Events - Create & Manage Events</title>
          <style>{"body { background-color: #345995; }"}</style>
        </Helmet>
        <Title>plan your next event</Title>
        <Link href="/events/new">
          <Button max>get started</Button>
        </Link>
      </HomeContainer>
    </Suspense>
  );
};

export default Home;
