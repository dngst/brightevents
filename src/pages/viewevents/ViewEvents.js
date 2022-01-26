import { Helmet } from "react-helmet";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";


const ViewEvents = () => {
    return (
        <Container>
            <Helmet>
                <title>Events | Bright Events</title>
            </Helmet>
            <Title>browse events</Title>
            <Input placeholder="search events by title, location, cateogry" />
            <Card />
            <Card />
            <Card />
        </Container>
    );
}

export default ViewEvents;
