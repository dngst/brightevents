import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
const FormContainer = React.lazy(() =>
  import("components/container/FormContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Button = React.lazy(() => import("components/Button"));
const Input = React.lazy(() => import("components/Input"));

const ResetPassword = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <FormContainer md>
        <Helmet>
          <title>Reset Password | Bright Events</title>
        </Helmet>
        <Title>reset password</Title>
        <Input placeholder="email" />
        <Button primary>send link</Button>
      </FormContainer>
    </Suspense>
  );
};

export default ResetPassword;
