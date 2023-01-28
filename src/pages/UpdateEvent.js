import { Helmet } from "react-helmet";
import { Input, TextArea, DatePicker, TimePicker } from "components/Input";
import { Label, LabelText } from "components/Label";
import Title from "components/Title";
import Button from "components/Button";
import Container from "components/container/Container";

const UpdateEvent = () => {
  return (
    <Container md>
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
    </Container>
  );
};

export default UpdateEvent;
