import { Helmet } from "react-helmet";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";

const Home = () => {
    return (
        <div className="home center">
            <Helmet>
                <title>Bright Events - Create & Manage Events</title>
            </Helmet>
            <Title>plan your next event</Title>
            <Button as="a" href="/new" primary>get started</Button>
        </div>
    );
}

export default Home;
