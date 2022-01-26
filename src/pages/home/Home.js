import { Helmet } from "react-helmet";
import Title from "components/title/Title";
import Button from "components/button/Button";
import HomeContainer from "components/container/HomeContainer";


const Home = () => {
    return (
        <HomeContainer>
            <Helmet>
                <title>Bright Events - Create & Manage Events</title>
            </Helmet>
            <Title fsize="3rem" color="#ffffff" padding="15% 0 2.5%" margin="auto">
                plan your next event
            </Title>
            <Button as="a" href="/new" primary>get started</Button>
        </HomeContainer>
    );
}

export default Home;
