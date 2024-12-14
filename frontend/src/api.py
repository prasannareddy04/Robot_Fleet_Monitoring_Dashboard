from flask import Flask, jsonify, request
from flask_socketio import SocketIO, emit
import random
import time
import threading
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

with open('fake_robot_data.json', 'r') as file:
    robots_data = json.load(file)

data_lock = threading.Lock()

def simulate_telemetry_updates():
    while True:
        with data_lock:
            for robot in robots_data[:10]:  
                if random.choice([True, False]):
                    robot['Battery Percentage'] = max(0, robot['Battery Percentage'] - random.randint(0, 5))
                    robot['CPU Usage'] = random.randint(0, 100)
                    robot['RAM Consumption'] = random.randint(100, 8000)
                    robot['Location Coordinates'] = [
                        robot['Location Coordinates'][0] + random.uniform(-0.01, 0.01),
                        robot['Location Coordinates'][1] + random.uniform(-0.01, 0.01)
                    ]
                    robot['Last Updated'] = time.strftime('%Y-%m-%d %H:%M:%S')
        socketio.emit('update', robots_data[:10])
        time.sleep(5)  
data_lock
@app.route('/api/robots', methods=['GET'])
def get_robots():
    with data_lock:
        return jsonify(robots_data[:10])
@socketio.on('connect')
def handle_connect():
    emit('update', robots_data[:10])

if __name__ == '__main__':
    telemetry_thread = threading.Thread(target=simulate_telemetry_updates)
    telemetry_thread.daemon = True
    telemetry_thread.start()
    socketio.run(app, host='0.0.0.0', port=5000)
