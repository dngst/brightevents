import { Link } from "wouter";
import { Helmet } from "react-helmet";
import Paragraph from "components/Paragraph";
import { EmailInput } from "components/Input";
import { Label, LabelText } from "components/Label";
import Title from "components/Title";
import Button from "components/Button";
import Container from "components/container/Container";

const ResetPassword = () => {
  return (
    <Container md>
      <Helmet>
        <title>Reset Password | Bright Events</title>
      </Helmet>
      <Title>reset password</Title>
      <Label htmlFor="email">
        <LabelText>email</LabelText>
      </Label>
      <EmailInput id="email" />
      <Button primary>send link</Button>
      <Paragraph capitalize>
        <Link to="/signup">create a new account</Link>
      </Paragraph>
    </Container>
  );
};

export default ResetPassword;
