import { Helmet } from "react-helmet";
import { Link } from "wouter";
import FormContainer from "components/container/FormContainer";
import Title from "components/Title";
import Button from "components/Button";
import Input from "components/input/Input";
import PasswordInput from "components/input/PasswordInput";
import Paragraph from "components/Paragraph";

const SignUp = () => {
  return (
    <FormContainer md>
      <Helmet>
        <title>Sign Up | Bright Events</title>
      </Helmet>
      <Title>sign up</Title>
      <Input placeholder="user name" />
      <Input placeholder="email" />
      <PasswordInput placeholder="password" />
      <PasswordInput placeholder="password confirmation" />
      <Button primary>join</Button>
      <Paragraph capitalize>
        Already have an account?<Link to="/login"> login</Link>
      </Paragraph>
    </FormContainer>
  );
};

export default SignUp;
