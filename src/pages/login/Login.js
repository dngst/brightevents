import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/title/Title";
import Button from "components/button/Button";
import Input from "components/input/Input";
import PasswordInput from "components/input/PasswordInput";
import Paragraph from "components/paragraph/Paragraph";


const Login = () => {
    return (
        <Container>
            <Helmet>
                <title>Login | Bright Events</title>
            </Helmet>
            <Title>login</Title>
            <Input placeholder="email" />
            <PasswordInput placeholder="password" />
            <Button primary>submit</Button>
            <Paragraph capitalize>
                <Link to="/resetpassword">forgot password?</Link>
            </Paragraph>
            <Paragraph capitalize>
                Don't have an account?<Link to="/signup"> sign up</Link>
            </Paragraph>
        </Container>
    );
}

export default Login;
