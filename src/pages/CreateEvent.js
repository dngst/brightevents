import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Input, TextArea, DatePicker, TimePicker } from "components/Input";
import { Label, LabelText } from "components/Label";
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
        <Label htmlFor="title">
          <LabelText>event title</LabelText>
        </Label>
        <Input id="title"/>
        <Label htmlFor="description">
          <LabelText>event description</LabelText>
        </Label>
        <TextArea id="description" />
        <Label htmlFor="location">
          <LabelText>event location</LabelText>
        </Label>
        <Input id="location" />
        <Label htmlFor="category">
          <LabelText>event category</LabelText>
        </Label>
        <Input id="category" />
        <Label htmlFor="date">
          <LabelText>event date</LabelText>
        </Label>
        <DatePicker id="date" />
        <Label htmlFor="start-time">
          <LabelText>event start time</LabelText>
        </Label>
        <TimePicker id="start-time" />
        <Label htmlFor="end-time">
          <LabelText>event end time</LabelText>
        </Label>
        <TimePicker id="end-time" />
        <Button primary>add</Button>
      </FormContainer>
    </Suspense>
  );
};

export default CreateEvent;
