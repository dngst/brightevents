import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Sticky from "components/container/Sticky";
import Title from "components/title/Title";
import Input from "components/input/Input";
import Card from "components/card/Card";
import Paragraph from "components/paragraph/Paragraph";


const ViewEvents = () => {
    return (
        <Container primary>
            <Helmet>
                <title>Events | Bright Events</title>
            </Helmet>
            <Sticky>
                <Title>browse events</Title>
                <Input placeholder="search events by title, location, cateogry" />
            </Sticky>
            <Card>
                <Paragraph className="card-title">
                    <Link to="event">breaking the fast</Link>
                    <span> - [1-2-2022]</span>
                </Paragraph>
                <Paragraph>
                Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
                dolore voluptate...
                </Paragraph>
                <Paragraph><Link to="#">#food</Link></Paragraph>
            </Card>
            <Card>
                <Paragraph className="card-title">
                    <Link to="event">breaking the fast</Link>
                    <span> - [1-2-2022]</span>
                </Paragraph>
                <Paragraph>
                Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
                dolore voluptate...
                </Paragraph>
                <Paragraph><Link to="#">#food</Link></Paragraph>
            </Card>
            <Card>
                <Paragraph className="card-title">
                    <Link to="event">breaking the fast</Link>
                    <span> - [1-2-2022]</span>
                </Paragraph>
                <Paragraph>
                Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
                dolore voluptate...
                </Paragraph>
                <Paragraph><Link to="#">#food</Link></Paragraph>
            </Card>
            <Card>
                <Paragraph className="card-title">
                    <Link to="event">breaking the fast</Link>
                    <span> - [1-2-2022]</span>
                </Paragraph>
                <Paragraph>
                Deserunt voluptate pariatur tempor et eiusmod ex tempor mollit
                dolore voluptate...
                </Paragraph>
                <Paragraph><Link to="#">#food</Link></Paragraph>
            </Card>
            <Card>
                <Paragraph className="card-title">
                    <Link to="event">breaking the fast</Link>
                    <span> - [1-2-2022]</span>
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
