import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Input, PasswordInput } from "components/Input";
const FormContainer = React.lazy(() =>
  import("components/container/FormContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Paragraph = React.lazy(() => import("components/Paragraph"));
const Button = React.lazy(() => import("components/Button"));

const Login = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <FormContainer md>
        <Helmet>
          <title>Login | Bright Events</title>
        </Helmet>
        <Title>login</Title>
        <Input placeholder="email" />
        <PasswordInput placeholder="password" />
        <Button primary>ok</Button>
        <Paragraph capitalize>
          <Link to="/resetpassword">forgot password?</Link>
        </Paragraph>
        <Paragraph capitalize>
          Don't have an account?<Link to="/signup"> sign up</Link>
        </Paragraph>
      </FormContainer>
    </Suspense>
  );
};

export default Login;
