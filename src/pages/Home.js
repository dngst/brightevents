import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Title from "components/Title";
import Button from "components/Button";
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
            <Link href="/new"><Button primary>get started</Button></Link>
        </HomeContainer>
    );
}

export default Home;
