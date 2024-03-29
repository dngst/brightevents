import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Title from "components/Title";
import Container from "components/container/Container";

const Socials = () => {
  return (
      <Container left>
        <Helmet>
          <title>Socials | Bright Events</title>
        </Helmet>
        <Title>socials</Title>
        <ul>
          <li><Link href="#">discord.</Link></li>
          <li><Link href="#">instagram.</Link></li>
          <li><Link href="#">facebook.</Link></li>
          <li><Link href="#">twitter.</Link></li>
          <li><Link href="#">youtube.</Link></li>
          <li><Link href="#">tiktok.</Link></li>
        </ul>
      </Container>
  );
};

export default Socials;
