from flask import Flask, jsonify, request

app = Flask(__name__)

properties = [
    {"id": 1, "name": "Sunset Villas", "location": "California", "rent": 2500, "tenant": "Alice"},
    {"id": 2, "name": "Greenwood Apartments", "location": "Texas", "rent": 1800, "tenant": "Bob"}
]

@app.route("/api/properties", methods=["GET"])
def get_properties():
    return jsonify(properties)

@app.route("/api/properties", methods=["POST"])
def add_property():
    data = request.get_json()
    new_id = max(p["id"] for p in properties) + 1 if properties else 1
    new_property = {"id": new_id, **data}
    properties.append(new_property)
    return jsonify(new_property), 201

@app.route("/api/properties/<int:property_id>", methods=["PUT"])
def update_property(property_id):
    data = request.get_json()
    for prop in properties:
        if prop["id"] == property_id:
            prop.update(data)
            return jsonify(prop)
    return jsonify({"error": "Property not found"}), 404

@app.route("/api/properties/<int:property_id>", methods=["DELETE"])
def delete_property(property_id):
    global properties
    properties = [p for p in properties if p["id"] != property_id]
    return jsonify({"message": "Property deleted"}), 200

if __name__ == "__main__":
    app.run(debug=True)
