import { Helmet } from "react-helmet";
import { Input, TextArea, DatePicker, TimePicker } from "components/Input";
import { Label, LabelText } from "components/Label";
import Title from "components/Title";
import Button from "components/Button";
import Container from "components/container/Container";

const CreateEvent = () => {
  return (
    <Container md>
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
    </Container>
  );
};

export default CreateEvent;
