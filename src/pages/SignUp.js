import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Container from "components/container/Container";
import Title from "components/Title";
import Button from "components/Button";
import Input from "components/input/Input";
import PasswordInput from "components/input/PasswordInput";
import Paragraph from "components/Paragraph";


const SignUp = () => {
    return (
        <Container>
            <Helmet>
                <title>Sign Up | Bright Events</title>
            </Helmet>
            <Title>sign up</Title>
            <Input placeholder="user name" />
            <Input placeholder="email" />
            <PasswordInput placeholder="password" />
            <PasswordInput placeholder="password confirmation" />
            <Button primary>join</Button>
            <Paragraph capitalize>
                Already have an account?<Link to="/login"> login</Link>
            </Paragraph>
        </Container>
    );
}

export default SignUp;
