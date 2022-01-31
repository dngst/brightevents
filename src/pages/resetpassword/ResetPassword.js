import { Helmet } from "react-helmet";
import Container from "components/container/Container";
import Title from "components/title/Title";
import Input from "components/input/Input";
import Button from "components/button/Button";


const ResetPassword = () => {
    return (
        <Container>
            <Helmet>
                <title>Reset Password | Bright Events</title>
            </Helmet>
            <Title>reset password</Title>
            <Input placeholder="email" />
            <Button primary>send link</Button>
        </Container>
    );
}

export default ResetPassword;
