import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Input, EmailInput, PasswordInput } from "components/Input";
const FormContainer = React.lazy(() =>
  import("components/container/FormContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Paragraph = React.lazy(() => import("components/Paragraph"));
const Button = React.lazy(() => import("components/Button"));

const SignUp = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <FormContainer md>
        <Helmet>
          <title>Sign Up | Bright Events</title>
        </Helmet>
        <Title>sign up</Title>
        <Input placeholder="user name" />
        <EmailInput placeholder="email" />
        <PasswordInput placeholder="password" />
        <PasswordInput placeholder="password confirmation" />
        <Button primary>join</Button>
        <Paragraph capitalize>
          Already have an account?<Link to="/login"> login</Link>
        </Paragraph>
      </FormContainer>
    </Suspense>
  );
};

export default SignUp;
