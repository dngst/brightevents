import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { EmailInput, PasswordInput } from "components/Input";
import { Label, LabelText } from "components/Label";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Button from "components/Button";
import Container from "components/container/Container";

const Login = () => {
  return (
    <Container md>
      <Helmet>
        <title>Login | Bright Events</title>
      </Helmet>
      <Title>login</Title>
      <Label htmlFor="email">
        <LabelText>email</LabelText>
      </Label>
      <EmailInput id="email" />
      <Label htmlFor="password">
        <LabelText>password</LabelText>
      </Label>
      <PasswordInput id="password" />
      <Button primary>ok</Button>
      <Paragraph capitalize>
        <Link to="/password/reset">forgot password?</Link>
      </Paragraph>
      <Paragraph capitalize>
        Don't have an account?<Link to="/signup"> sign up</Link>
      </Paragraph>
    </Container>
  );
};

export default Login;
