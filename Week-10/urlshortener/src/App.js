import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
