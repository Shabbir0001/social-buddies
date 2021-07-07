import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';
import { useState } from 'react';



function App() {
  // const classNames = {
  //   dark: "App-header",
  //   light: "App-header-light"
  // };
  const dark = "App-header";
  const light = "App-header-light";
  const [className, setClassName] = useState(dark);
  const handleMode = ()=>{
    return className === dark ? setClassName(light) : className === light ? setClassName(dark) : setClassName(dark);
  };

  return (
    <div className="App">
      <header className={className}>
        <button onClick={()=> handleMode()}>Switch Mode</button>
      <Router>
      <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/posts/:id">
            <PostDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
