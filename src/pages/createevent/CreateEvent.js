import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/title/Title";
import Button from "components/button/Button";
import Input from "components/input/Input";
import TextArea from "components/input/TextArea";
import DatePicker from "components/input/DatePicker";
import TimePicker from "components/input/TimePicker";


const CreateEvent = () => {
    return (
        <Container>
            <Helmet>
                <title>Create Event | Bright Events</title>
            </Helmet>
            <Title>new event</Title>
            <Input placeholder="event title" />
            <TextArea placeholder="event description" />
            <Input placeholder="event location" />
            <Input placeholder="event category" />
            <DatePicker />
            <TimePicker />
            <TimePicker />
            <Button primary>create</Button>
        </Container>
    );
}

export default CreateEvent;
