import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/Title";
import { Link } from "wouter";

const BizStuff = () => {
  return (
      <Container left>
        <Helmet>
          <title>Biz Stuff | Bright Events</title>
        </Helmet>
        <Title>biz stuff</Title>
        <ul>
          <li><Link href="#">terms of use.</Link></li>
          <li><Link href="#">privacy policy.</Link></li>
        </ul>
      </Container>
  );
};

export default BizStuff;
