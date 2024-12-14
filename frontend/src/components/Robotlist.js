import React from "react";

const RobotList = ({ robots }) => {
  return (
    <div className="robot-list">
      <h2>Robot List</h2>
      <ul>
        {robots.map((robot) => (
          <li key={robot["Robot ID"]}>
            <strong>ID:</strong> {robot["Robot ID"]} <br />
            <strong>Status:</strong> {robot["Online/Offline"] ? "Online" : "Offline"} <br />
            <strong>Battery:</strong> {robot["Battery Percentage"]}% <br />
            <strong>CPU Usage:</strong> {robot["CPU Usage"]}% <br />
            <strong>RAM:</strong> {robot["RAM Consumption"]} MB <br />
            <strong>Last Updated:</strong> {robot["Last Updated"]} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RobotList;
