import "./theme.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Library from "./pages/Library";
import Account from "./pages/Account";
export default function Theme() {
  return (
    <div className="body">
      <Router>
        <div className="body-head">
          <div className="body-head-nav">
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/library">Library</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
        <div className="body-middle">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/community">
              <Community />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="body-footer">Footer</div>
    </div>
  );
}
