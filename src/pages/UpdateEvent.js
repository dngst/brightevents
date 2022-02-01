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
    <Container>
      <Helmet>
        <title>Update Event | Bright Events</title>
      </Helmet>
      <Title>update event</Title>
      <Input placeholder="event title" />
      <TextArea placeholder="event description" />
      <Input placeholder="event location" />
      <Input placeholder="event category" />
      <DatePicker />
      <TimePicker />
      <TimePicker />
      <Button primary>edit</Button>
    </Container>
  );
};

export default UpdateEvent;
