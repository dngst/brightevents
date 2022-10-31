import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { EmailInput, PasswordInput } from "components/Input";
import { Label, LabelText } from "components/Label";
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
      </FormContainer>
    </Suspense>
  );
};

export default Login;
