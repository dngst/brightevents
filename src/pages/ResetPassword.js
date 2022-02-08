import { Helmet } from "react-helmet";
import FormContainer from "components/container/FormContainer";
import Title from "components/Title";
import Input from "components/input/Input";
import Button from "components/Button";

const ResetPassword = () => {
  return (
    <FormContainer md>
      <Helmet>
        <title>Reset Password | Bright Events</title>
      </Helmet>
      <Title>reset password</Title>
      <Input placeholder="email" />
      <Button primary>send link</Button>
    </FormContainer>
  );
};

export default ResetPassword;
