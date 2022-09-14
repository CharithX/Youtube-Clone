
import './App.css';
import Header from './components/Header/Header';
import SideBar from "./components/SideBar/SideBar";
import SearchPage from "./components/SearchPage/SearchPage"
import Recommondation from "./components/Recommondation/Recommondation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <SideBar />
              <Recommondation />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
