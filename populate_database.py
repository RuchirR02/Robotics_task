from pymongo import MongoClient
from random import randint

# Connect to MongoDB
client = MongoClient('localhost', 27017)
db = client['robotic_dashboard']
collection = db['robot_data']

# Sample robotic data
data = [
    {'battery_level': randint(50, 100), 'status': 'idle', 'logs': ['Log 11', 'Log 12', 'Log 13']},
    {'battery_level': randint(50, 100), 'status': 'active', 'logs': ['Log 14', 'Log 15', 'Log 16']},
    {'battery_level': randint(50, 100), 'status': 'active', 'logs': ['Log 17', 'Log 18', 'Log 19']},
    {'battery_level': randint(50, 100), 'status': 'charging', 'logs': ['Log 21', 'Log 22', 'Log 23']},
    {'battery_level': randint(50, 100), 'status': 'active', 'logs': ['Log 24', 'Log 25', 'Log 26']},
    {'battery_level': randint(50, 100), 'status': 'charging', 'logs': ['Log 27', 'Log 28', 'Log 29']}
]

collection.insert_many(data)

print("Sample data inserted into MongoDB.")
