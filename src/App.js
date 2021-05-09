import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,HashRouter,Switch,Route} from "react-router-dom"
import Page1 from "./pages/page1"
import Page2 from "./pages/page2"

function App() {
  return (
    <div className="App">
      <Router>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </HashRouter>
      </Router>
    </div>
  );
}

export default App;
