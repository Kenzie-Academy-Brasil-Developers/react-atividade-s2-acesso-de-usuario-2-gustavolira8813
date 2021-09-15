import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/Home";
import { members } from "./members";
import Customer from "./pages/customer";
import Company from "./pages/company";
import NewClient from "./components/NewClient";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members} />
            {/* <NewClient /> */}
          </Route>
          <Route path="/costumer/:id">
            <Customer members={members}></Customer>
          </Route>
          <Route path="/company/:id">
            <Company members={members}></Company>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
