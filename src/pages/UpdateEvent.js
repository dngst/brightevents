import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Input, TextArea, DatePicker, TimePicker } from "components/Input";
import { Label, LabelText } from "components/Label";
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
        <Label htmlFor="title">
          <LabelText>event title</LabelText>
        </Label>
        <Input id="title" defaultValue="breaking the fast" />
        <Label htmlFor="description">
          <LabelText>event description</LabelText>
        </Label>
        <TextArea
          id="description"
          defaultValue="Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit dolore
        voluptate quis veniam non in ullamco consequat consectetur dolor labore
        adipisicing culpa ad do excepteur ut exercitation ut aliquip cupidatat
        voluptate labore."
        />
        <Label htmlFor="location">
          <LabelText>event location</LabelText>
        </Label>
        <Input id="location" defaultValue="nakuru" />
        <Label htmlFor="category">
          <LabelText>event category</LabelText>
        </Label>
        <Input id="category" defaultValue="food" />
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
        <Button primary>edit</Button>
      </FormContainer>
    </Suspense>
  );
};

export default UpdateEvent;
