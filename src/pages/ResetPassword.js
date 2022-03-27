import React, { Suspense } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import Paragraph from "components/Paragraph";
import { EmailInput } from "components/Input";
const FormContainer = React.lazy(() =>
  import("components/container/FormContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Button = React.lazy(() => import("components/Button"));

const ResetPassword = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <FormContainer md>
        <Helmet>
          <title>Reset Password | Bright Events</title>
        </Helmet>
        <Title>reset password</Title>
        <EmailInput placeholder="email" />
        <Button primary>send link</Button>
        <Paragraph capitalize>
          <Link to="/signup">create a new account</Link>
        </Paragraph>
      </FormContainer>
    </Suspense>
  );
};

export default ResetPassword;
