import "./App.css";
import Footer from './components/Footer'
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import Content from "./pages/Content";
import Community from "./pages/Community";
import Aboutus from "./pages/Aboutus";
import { Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div>
          
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

        <Footer/>

    </div>
  );
}

export default App;
