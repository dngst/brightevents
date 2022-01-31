import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Input from "components/input/Input";
import Card from "components/Card";
import Paragraph from "components/Paragraph";


const ViewEvents = () => {
    return (
        <Container primary>
            <Helmet>
                <title>Events | Bright Events</title>
            </Helmet>
            <Title>browse events</Title>
            <Input placeholder="search events by title, location, cateogry" />
            <Card>
                <Paragraph className="card-title">
                    <Link to="event">breaking the fast</Link>
                    <span> - 1 feb 22</span>
                </Paragraph>
                <Paragraph>
                Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
                dolore voluptate...
                </Paragraph>
                <Paragraph><Link to="#">#food</Link></Paragraph>
            </Card>
        </Container>
    );
}

export default ViewEvents;
