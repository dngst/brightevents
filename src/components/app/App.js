import { Route, Switch } from "wouter";
import GlobalStyle from "../globalstyle/GlobalStyle";
import Home from "../../pages/home/Home";
import CreateEvent from "../../pages/createevent/CreateEvent";
import PageNotFound from "../../pages/pagenotfound/PageNotFound";
import ResetPassword from "../../pages/resetpassword/ResetPassword";
import SignUp from "../../pages/signup/SignUp";
import Login from "../../pages/login/Login";
import ViewEvents from "../../pages/viewevents/ViewEvents";


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/new" component={CreateEvent} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/events" component={ViewEvents} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
