import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";


const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login | Bright Events</title>
            </Helmet>
            <h1 className="capitalize">login</h1>
            <Input placeholder="email" />
            <PasswordInput placeholder="password" />
            <Button primary>submit</Button>
            <p className="capitalize">
                <Link to="/resetpassword">forgot password? reset password</Link>
            </p>
            <p className="capitalize">
                Don't have an account?<Link to="/signup"> sign up</Link>
            </p>
        </div>
    );
}

export default Login;
