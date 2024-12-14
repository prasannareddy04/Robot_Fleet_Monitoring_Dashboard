# Robot Fleet Monitoring Dashboard

## Overview
The **Robot Fleet Monitoring Dashboard** is a full-stack application designed to monitor and display the status and telemetry data of multiple robots in real-time. The project is split into a Flask-based backend for serving robot data and a React.js frontend for visualization. This app provides a modern UI with a dark theme, animations, and real-time updates.

---

## Features

### Backend
- Built using Flask with WebSocket support via `Flask-SocketIO`.
- Serves robot telemetry data (e.g., battery, CPU, RAM, location).
- Simulates real-time data updates for up to 10 robots.

### Frontend
- Built using React.js with modern design principles.
- Displays:
  - Robot list with status, telemetry, and last update time.
  - Real-time map with robot locations (using `react-leaflet`).
- Fully responsive with dark theme, linear gradients, and animations.
- Interactive buttons and hover effects.

---

## Folder Structure
```
robot_fleet_monitoring/
├── backend/                             
│   ├── app.py                          
│   ├── fake_robot_data.json            
│   └── requirements.txt               
│
├── frontend/                        
│   ├── public/
│   │   ├── index.html                
│   │   └── favicon.ico                 
│   │
│   ├── src/
│   │   ├── App.js                   
│   │   ├── index.js                    
│   │   ├── components/
│   │   │   ├── Robotlist.js        
│   │   │   └── MapView.js            
│   │   ├── styles/
│   │   │   └── App.css               
│   │   └── api.py
│   │                   
│   │
│   └── package.json                    
│
└── README.md                          
```

---

## Prerequisites

### Backend
- Python 3.8+
- `pip` package manager

### Frontend
- Node.js 16+
- npm (Node Package Manager)

---

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate   # For Linux/Mac
   venv\Scripts\activate    # For Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the backend server:
   ```bash
   python app.py
   ```
   The API will be available at `http://127.0.0.1:5000`.

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## How to Use
1. Ensure the Flask backend is running on `http://127.0.0.1:5000`.
2. Start the React.js frontend and open `http://localhost:3000` in a browser.
3. The dashboard displays:
   - A list of robots with their status and telemetry data.
   - A map showing their real-time locations.
4. Interact with the dashboard:
   - Hover over robots or use buttons for animations.
   - Observe real-time updates via WebSocket.

---

## Technologies Used

### Backend
- Flask
- Flask-SocketIO
- Python

### Frontend
- React.js
- React-Leaflet
- Leaflet.js
- CSS (animations, hover effects, responsive design)

---


## Credits
This project is designed by Prasanna Reddy Avula  for the Robotair Full-Stack Internship Challenge and demonstrates skills in backend, frontend, real-time updates, and responsive design .

