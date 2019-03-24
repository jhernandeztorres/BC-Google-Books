import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search/Search"
import Saved from "./pages/saved/index.js"
import NoMatch from "./pages/nomatch/index.js"
import Detail from "./pages/detail/index.js"
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
  )
  
}

export default App;
