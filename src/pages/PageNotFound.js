import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Button from "components/Button";

const PageNotFound = () => {
  return (
    <Container>
      <Helmet>
        <title>Page Not Found | Bright Events</title>
      </Helmet>
      <Title>page not found</Title>
      <Link href="/events">
        <Button max>browse events</Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;
