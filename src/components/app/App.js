import { Route, Switch } from "wouter";
import GlobalStyle from "../globalstyle/GlobalStyle";
import Navbar from "../nav/Navbar";
import Home from "pages/home/Home";
import CreateEvent from "pages/createevent/CreateEvent";
import Login from "pages/login/Login";
import SignUp from "pages/signup/SignUp";
import ResetPassword from "pages/resetpassword/ResetPassword";
import ViewEvents from "pages/viewevents/ViewEvents";
import UpdateEvent from "pages/updateevent/UpdateEvent";
import PageNotFound from "pages/pagenotfound/PageNotFound";
import About from "pages/about/About";


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/events" component={ViewEvents} />
        <Route path="/new" component={CreateEvent} />
        <Route path="/update" component={UpdateEvent} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/about" component={About}/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
