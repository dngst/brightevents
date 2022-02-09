import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Input, TextArea, DatePicker, TimePicker } from "components/Input";
const FormContainer = React.lazy(() =>
  import("components/container/FormContainer")
);
const Title = React.lazy(() => import("components/Title"));
const Button = React.lazy(() => import("components/Button"));

const UpdateEvent = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <FormContainer md>
        <Helmet>
          <title>Update Event | Bright Events</title>
        </Helmet>
        <Title>update event</Title>
        <Input placeholder="event title" value="breaking the fast" />
        <TextArea
          placeholder="event description"
          value="Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit dolore
        voluptate quis veniam non in ullamco consequat consectetur dolor labore
        adipisicing culpa ad do excepteur ut exercitation ut aliquip cupidatat
        voluptate labore."
        />
        <Input placeholder="event location" value="nakuru" />
        <Input placeholder="event category" value="food" />
        <DatePicker />
        <TimePicker />
        <TimePicker />
        <Button primary>edit</Button>
      </FormContainer>
    </Suspense>
  );
};

export default UpdateEvent;
