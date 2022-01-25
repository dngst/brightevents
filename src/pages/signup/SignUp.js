import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";


const SignUp = () => {
    return (
        <div>
            <Helmet>
                <title>Sign Up | Bright Events</title>
            </Helmet>
            <h1 className="capitalize">sign up</h1>
            <Input placeholder="user name" />
            <Input placeholder="email" />
            <PasswordInput placeholder="password" />
            <PasswordInput placeholder="password confirmation" />
            <Button primary>join</Button>
            <p className="capitalize">
                Already have an account?<Link to="/login"> login</Link>
            </p>
        </div>
    );
}

export default SignUp;
