import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Home/Homepage";
import Bear from "./components/Bear/Bear"
import Footer from "./components/Footer/footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="" component={Homepage} />
          </Switch>
          <Bear />
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;