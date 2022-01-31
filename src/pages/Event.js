import { Helmet } from "react-helmet";
import { Link } from "wouter";
import EventContainer from "components/container/EventContainer";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import Button from "components/Button";


const Event = () => {
    return (
        <EventContainer>
            <Helmet>
                <title>Breaking the fast | Bright Events</title>
            </Helmet>
            <Title>breaking the fast</Title>
            <hr />
            <Paragraph justify>
            Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
            dolore voluptate quis veniam non in ullamco consequat
            consectetur dolor labore adipisicing culpa ad do excepteur ut
            exercitation ut aliquip cupidatat voluptate labore.
            </Paragraph>
            <Paragraph justify><Link to="#">#food</Link></Paragraph>
            <Paragraph capitalize className="card-footer">
                nakuru | 1 feb 22 | 11:00 - 2:00
            </Paragraph>
            <div className="event-btns">
                <Button primary>rsvp</Button>
                <Button>update</Button>
                <Button>delete</Button>
            </div>
        </EventContainer>
    );
}

export default Event;
