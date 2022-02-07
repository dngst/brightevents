import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/Title";
import Input from "components/input/Input";
import Button from "components/Button";

const ResetPassword = () => {
  return (
    <Container md>
      <Helmet>
        <title>Reset Password | Bright Events</title>
      </Helmet>
      <Title>reset password</Title>
      <Input placeholder="email" />
      <Button primary>send link</Button>
    </Container>
  );
};

export default ResetPassword;
