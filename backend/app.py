from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# Endpoint to manage customer preferences
@app.route('/preferences', methods=['POST'])
def save_preferences():
    data = request.json
    # Save preferences (mock logic)
    return jsonify({"message": "Preferences saved", "data": data}), 200

# Endpoint to handle disruption management
@app.route('/disruptions', methods=['POST'])
def handle_disruption():
    flight_status = request.json.get("status")
    if flight_status == "cancelled":
        return jsonify({"message": "Flight cancelled, rebooking options provided"}), 200
    return jsonify({"message": "Flight on schedule"}), 200

if __name__ == '__main__':
    app.run(debug=True)
