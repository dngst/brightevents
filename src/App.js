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
import Socials from "pages/Socials";
import BizStuff from "pages/BizStuff"
import Footer from "components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/events" component={ViewEvents} />
        <Route path="/events/1" component={Event} />
        <Route path="/events/new" component={CreateEvent} />
        <Route path="/events/1/edit" component={UpdateEvent} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/password/reset" component={ResetPassword} />
        <Route path="/about" component={About} />
        <Route path="/socials" component={Socials} />
        <Route path="/bizstuff" component={BizStuff} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
