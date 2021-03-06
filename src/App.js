import { Route, Switch } from "wouter";
import GlobalStyle from "components/GlobalStyle";
import Navbar from "components/nav/Navbar";
import Home from "pages/Home";
import CreateEvent from "pages/CreateEvent";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import ResetPassword from "pages/ResetPassword";
import ViewEvents from "pages/ViewEvents";
import Event from "pages/Event";
import UpdateEvent from "pages/UpdateEvent";
import PageNotFound from "pages/PageNotFound";
import About from "pages/About";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/events" component={ViewEvents} />
        <Route path="/events/1" component={Event} />
        <Route path="/new" component={CreateEvent} />
        <Route path="/events/1/update" component={UpdateEvent} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/password/reset" component={ResetPassword} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
