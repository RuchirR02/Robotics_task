from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app) 

app.config['MONGO_URI'] = 'mongodb://localhost:27017/robotic_dashboard'
mongo = PyMongo(app)

@app.route('/api/data')
def get_data():
    
    collection = mongo.db.robot_data
    data_from_db = list(collection.find())

   
    for doc in data_from_db:
        doc['_id'] = str(doc['_id'])

    return jsonify(data_from_db)

if __name__ == '__main__':
    app.run(debug=True)
