import "./App.css";
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Content from "./pages/Content";
import Community from "./pages/Community";
import Aboutus from "./pages/Aboutus";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Becef Network</h1>
      <Navbar />
      <Switch>
              <Route exact path="/">
                  <Homepage />
              </Route>
              <Route  path="/article">
                  <Article/>
              </Route>
              <Route  path="/content">
                  <Content/>
              </Route>
              <Route  path="/community">
                  <Community/>
              </Route>
              <Route  path="/about">
                  <Aboutus/>
              </Route>
          </Switch>
    </div>
  );
}

export default App;
