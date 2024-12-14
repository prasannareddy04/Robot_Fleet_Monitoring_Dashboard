
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import RobotList from "./components/RobotList";
import MapView from "./components/MapView";
import "./styles/App.css";

const App = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/robots")
      .then((res) => res.json())
      .then((data) => setRobots(data))
      .catch((err) => console.error("Error fetching data:", err));

    const socket = io("http://127.0.0.1:5000");

    socket.on("update", (data) => {
      setRobots(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Robot Fleet Monitoring Dashboard</h1>
      </header>
      <div className="dashboard">
        <RobotList robots={robots} />
        <MapView robots={robots} />
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/prasanna-sai-351509268" target="_blank" className="mr-4">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>

        <a href="https://github.com/prasannareddy04" target="_blank" className="mr-4">
          <i className="fab fa-github"></i> GitHub
        </a>
        
        <a href="mailto:aprasannareddy04@gmail.com" target="_blank" className="mr-4">
          <i className="fas fa-envelope"></i> Email
        </a>
        
        <p>Developed by Prasanna Reddy Avula</p>
      </footer>
    </div>
  );
};

export default App;
