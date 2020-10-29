import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import SearchPage from "./Components/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            {/* Search */}
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>        

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
