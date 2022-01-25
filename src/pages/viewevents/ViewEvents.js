import { Helmet } from "react-helmet";
import Input from "../../components/input/Input";
import Card from "../../components/card/Card";


const ViewEvents = () => {
    return (
        <div>
            <Helmet>
                <title>Events | Bright Events</title>
            </Helmet>
            <h1 className="capitalize">browse events</h1>
            <Input placeholder="search events by title, location, cateogry" />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default ViewEvents;
