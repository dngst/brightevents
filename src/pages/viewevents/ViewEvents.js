import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Sticky from "components/container/Sticky";
import Title from "components/title/Title";
import Input from "components/input/Input";
import Card from "components/card/Card";


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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    );
}

export default ViewEvents;
