import { Helmet } from "react-helmet";
import Title from "components/title/Title";
import Button from "components/button/Button";
import HomeContainer from "components/container/HomeContainer";


const Home = () => {
    return (
        <HomeContainer>
            <Helmet>
                <title>Bright Events - Create & Manage Events</title>
                <style>{"body { background-color: #345995; }" }</style>
            </Helmet>
            <Title>
                plan your next event
            </Title>
            <Button as="a" href="/new" primary className="entry-btn">get started</Button>
        </HomeContainer>
    );
}

export default Home;
