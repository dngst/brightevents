import { Helmet } from "react-helmet";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";


const ResetPassword = () => {
    return (
        <div>
            <Helmet>
                <title>Reset Password | Bright Events</title>
            </Helmet>
            <h1 className="capitalize">reset password</h1>
            <Input placeholder="enter your email" />
            <Button primary>send link</Button>
        </div>
    );
}

export default ResetPassword;
