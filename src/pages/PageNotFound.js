import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
const Container = React.lazy(() => import("components/container/Container"));
const Title = React.lazy(() => import("components/Title"));
const Button = React.lazy(() => import("components/Button"));

const PageNotFound = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Container>
        <Helmet>
          <title>Page Not Found | Bright Events</title>
        </Helmet>
        <Title>page not found</Title>
        <Link href="/events">
          <Button max>browse events</Button>
        </Link>
      </Container>
    </Suspense>
  );
};

export default PageNotFound;
