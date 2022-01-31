import { Helmet } from "react-helmet";
import { Link } from "wouter";
import EventContainer from "components/container/EventContainer";
import Title from "components/title/Title";
import Paragraph from "components/paragraph/Paragraph";
import Button from "components/button/Button";


const Event = () => {
    return (
        <EventContainer>
            <Helmet>
                <title>Breaking the fast | Bright Events</title>
            </Helmet>
            <Title>breaking the fast</Title>
            <hr />
            <Paragraph>
            Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
            dolore voluptate quis veniam non in ullamco consequat
            consectetur dolor labore adipisicing culpa ad do excepteur ut
            exercitation ut aliquip cupidatat voluptate labore.
            </Paragraph>
            <Paragraph><Link to="#">#food</Link></Paragraph>
            <Paragraph capitalize className="card-footer">nakuru | 1-2-2022 | 11:00 to 2:00</Paragraph>
            <Button primary>rsvp</Button>
        </EventContainer>
    );
}

export default Event;
