import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Input, TextArea, DatePicker, TimePicker } from "components/Input";
const Title = React.lazy(() => import("components/Title"));
const FormContainer = React.lazy(() =>
  import("components/container/FormContainer")
);
const Button = React.lazy(() => import("components/Button"));

const CreateEvent = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <FormContainer md>
        <Helmet>
          <title>Create Event | Bright Events</title>
        </Helmet>
        <Title>create event</Title>
        <Input placeholder="event title" />
        <TextArea placeholder="event description" />
        <Input placeholder="event location" />
        <Input placeholder="event category" />
        <DatePicker />
        <TimePicker />
        <TimePicker />
        <Button primary>add</Button>
      </FormContainer>
    </Suspense>
  );
};

export default CreateEvent;
