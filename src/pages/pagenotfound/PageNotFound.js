import { Helmet } from "react-helmet";
import Button from "../../components/button/Button";


const PageNotFound = () => {
    return (
        <div className="index center">
            <Helmet>
                <title>Page Not Found | Bright Events</title>
            </Helmet>
            <h1>page not found</h1>
            <Button as="a" href="/" primary>go to home</Button>
        </div>
    );
}

export default PageNotFound;
