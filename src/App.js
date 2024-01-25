import React from "react";
import "./App.css";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <footer>
          This Website is coded by{" "}
          <a href="https://www.linkedin.com/in/nino-antadze/" target="_blank">
            NiniA{" "}
          </a>
          and is <a>open-sourced on Github</a>
        </footer>
      </div>
    </div>
  );
}
