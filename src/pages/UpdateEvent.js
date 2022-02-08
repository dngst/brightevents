import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/Title";
import Button from "components/Button";
import Input from "components/input/Input";
import TextArea from "components/input/TextArea";
import DatePicker from "components/input/DatePicker";
import TimePicker from "components/input/TimePicker";

const UpdateEvent = () => {
  return (
    <Container md>
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
    </Container>
  );
};

export default UpdateEvent;
