import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/index";
//import Footer from "./components/Footer/index";
import Login from "./containers/Login/index";
import Signup from "./containers/SignUp/index";
import Home from "./containers/Home/index";
import Profile from "./containers/Profile/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/profile" exact component={Profile}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
