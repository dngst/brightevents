import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { EmailInput, PasswordInput } from "components/Input";
import { Label, LabelText } from "components/Label";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Button from "components/Button";
import Container from "components/container/Container";

const SignUp = () => {
  return (
    <Container md>
      <Helmet>
        <title>Sign Up | Bright Events</title>
      </Helmet>
      <Title>sign up</Title>
      <Label htmlFor="email">
        <LabelText>email</LabelText>
      </Label>
      <EmailInput id="email" />
      <Label htmlFor="password">
        <LabelText>password</LabelText>
      </Label>
      <PasswordInput id="password" />
      <Label htmlFor="password-confirmation">
        <LabelText>password confirmation</LabelText>
      </Label>
      <PasswordInput id="password-confirmation" />
      <Button primary>join</Button>
      <Paragraph capitalize>
        Already have an account?<Link to="/login"> login</Link>
      </Paragraph>
    </Container>
  );
};

export default SignUp;
