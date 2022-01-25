import { Helmet } from "react-helmet";
import Button from "../../components/button/Button";
import './Home.css';


const Home = () => {
    return (
        <div className="home center">
            <Helmet>
                <title>Bright Events - Create & Manage Events</title>
            </Helmet>
            <h1 className="capitalize">plan your next event</h1>
            <Button as="a" href="/newevent">get started</Button>
        </div>
    );
}

export default Home;
