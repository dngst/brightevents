import { Helmet } from "react-helmet";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";


const CreateEvent = () => {
    return (
        <div>
            <Helmet>
                <title>Create Event | Bright Events</title>
            </Helmet>
            <h1 className="capitalize">new event</h1>
            <Input placeholder="event title" />
            <Input placeholder="event  description" />
            <Input placeholder="event  location" />
            <Input placeholder="event  category" />
            <Input placeholder="event  date" />
            <Input placeholder="event  time" />
            <Button primary as="a" href="/login">create</Button>
        </div>
    );
}

export default CreateEvent;
