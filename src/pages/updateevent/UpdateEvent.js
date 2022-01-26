import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";


const UpdateEvent = () => {
    return (
        <Container>
            <Helmet>
                <title>Update Event | Bright Events</title>
            </Helmet>
            <Title>edit event</Title>
            <Input placeholder="event title" />
            <Input placeholder="event description" />
            <Input placeholder="event location" />
            <Input placeholder="event category" />
            <Input placeholder="event date" />
            <Input placeholder="event time" />
            <Button primary>update</Button>
        </Container>
    );
}

export default UpdateEvent;
