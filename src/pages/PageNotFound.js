import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Title from "components/Title";
import Button from "components/Button";
import Container from "components/container/Container";

const PageNotFound = () => {
  return (
    <Container left>
      <Helmet>
        <title>Page Not Found | Bright Events</title>
      </Helmet>
      <Title>page not found</Title>
      <Link href="/events">
        <Button>browse events</Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;
