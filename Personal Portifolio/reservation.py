# from pymongo  import MongoClient
# from datetime import datetime

# client = MongoClient("mongodb://localhost:27017/")
# db = client["hotel_booking"]
# users_collection = db["users"]
# rooms_collection = db["rooms"]
# reservations_collection = db["reservations"]
# print("Connected to the hotel booking database!")

# user = {
#   "name": "Dagmawi Tewodros",
#   "email": "dagmawialebachew@gmail.com"
# }

# user_id = users_collection.insert_one(user).inserted_id
# print(f'User inserted with ID: {user_id}')

# room = {
#   "room_number": 101,
#   "type": "Deluxe",
#   "price_per_night" : 150
# }

# room_id = rooms_collection.insert_one(room).inserted_id
# print(f'Room inserted with ID: {room_id}')

# def is_room_available(room_id,start_date, end_date):
#   reservation = reservations_collection.find_one({
#     "room_id": room_id,
#     "$or": [
#       {"start_date": {"$lt": end_date, "$gte": start_date}},
#       {"end_date": {"$gt": start_date, "$lte": end_date}}
#     ]
#   })
#   return reservation is None
# def make_reservation(user_id, room_id, start_date, end_date):
#   if is_room_available(room_id, start_date, end_date):
#     reservation = {
#       "user_id": user_id,
#       "room_id":room_id,
#       "start_date":start_date,
#       "end_date":end_date,
#       "created_at":datetime.now()
#       }
#     reservation_id = reservations_collection.insert_one(reservation).inserted_id
#     return f"Reservation confirmed ID: {reservation_id}"
#   else:
#     return "Sorry, the room is not available for the selected dates"
  
# def cancel_reservation(reservation_id):
#   result = reservations_collection.delete_one({"_id": reservation_id})
#   if result.deleted_count > 0:
#       return "Reservation cancelled successfully."
#   else:
#       return "Reservation not found."
# start_date = datetime(2024, 8, 15)
# end_date = datetime(2024, 8, 18)
# confirmation_message = make_reservation(user_id, room_id, start_date, end_date)
# print(confirmation_message)
