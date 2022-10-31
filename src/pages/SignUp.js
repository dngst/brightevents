import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Input, EmailInput, PasswordInput } from "components/Input";
import { Label, LabelText } from "components/Label";
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
        <Label htmlFor="user-name">
          <LabelText>user name</LabelText>
        </Label>
        <Input id="user-name" />
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
      </FormContainer>
    </Suspense>
  );
};

export default SignUp;
