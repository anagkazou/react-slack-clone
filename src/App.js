import Header from "./components/Header/header";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div className="app__body">
        <SideBar />
        <Switch>
          <Route path="/rooms/:roomId">
            <Chat/>
          </Route>
          <Route path="/rooms/:roomId">
            <Chat/>
          </Route>
        </Switch>

      </div>
      </Router>
    </div>
  );
}

export default App;
