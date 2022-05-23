import Feed from "./components/Feed";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Feed}></Route>
          <Route exact path="/Profile" component={Profile}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/NoteFound" component={NotFound}></Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
