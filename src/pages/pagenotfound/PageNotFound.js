import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/title/Title";
import Button from "components/button/Button";


const PageNotFound = () => {
    return (
        <Container>
            <Helmet>
                <title>Page Not Found | Bright Events</title>
            </Helmet>
            <Title>page not found</Title>
            <Button as="a" href="/events">browse events</Button>
        </Container>
    );
}

export default PageNotFound;
