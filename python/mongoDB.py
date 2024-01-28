#!/usr/bin/python3
from pymongo import MongoClient
import pprint

password = 'squanch'
# Provide the mongodb atlas url to connect python to mongodb using pymongo
CONNECTION_STRING = f'mongodb+srv://Cromulon:{password}@mongo.cuyuqu6.mongodb.net/?retryWrites=true&w=majority'

# Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
client = MongoClient(CONNECTION_STRING)

dbs = client.list_database_names()
rick_bd = client.rick
collections = rick_bd.list_collection_names()
#print(collections)

def insert_rick_doc():
  collection = rick_bd.rick
  rick_document  = {
    "name": "Rick Astly",
    "song": "Never Gonna Give You Up",
    "lyrics": {
      "verse1": '''We're no strangers to love |You know the rules and so do I | A full commitment's what I'm thinking of | You wouldn't get this from any other guy''',
      "verse1": '''We've known each other for so long | Your heart's been aching, but you're too shy to say it | Inside, we both know what's been going on | We know the game, and we're gonna play it'''},
    "Duration": 3.33,
    "Viral": True
  }
  inserted_id =  collection.insert_one(rick_document).inserted_id
  print(inserted_id)

productin = client.production
person_collection = productin.person_collection

def create_documents():
  first_names = ["abc","alan","jack","harry"]
  last_names = ["xyz","charlie","harrol","style"]
  ages = [2,45,45,36]
  
  docs = []


  for first_name, last_name, age in zip(first_names,last_names,ages):
    doc = {"first_name":first_name,"last_name":last_name,"age":age}
    #person_collection.insert_one()
    docs.append(doc)
  
  person_collection.insert_many(docs)

printer = pprint.PrettyPrinter()

def find_all_peersons():
  persons = person_collection.find()
  
  for person in persons:
    printer.pprint(person)

def find_item():
  abc = person_collection.find_one({"first_name":"abc"})
  printer.pprint(abc)

def get_person_by_id(person_id):
  from bson.objectid import ObjectId

  _id = ObjectId(person_id)
  person = person_collection.find_one({"_id":_id})
  printer.pprint(person)

#get_person_by_id('63ab14b2de16751f8ac4c347')

def get_age_range(min_age,max_age):
  query ={
    "$and": [
      {"age": {"$gte": min_age}}, #gte: greater than
      {"age": {"$lte": max_age}}
    ]}

  person = person_collection.find(query).sort("age")
  for missing in person:
    printer.pprint(missing)

#get_age_range(2,35)

def project_columns():
  columns = {"_id":0,"first_name":1,"last_name":1}
  person = person_collection.find({},columns)
  for missing in person:
    printer.pprint(missing)
  
#project_columns()

def update_person_by_id(person_id):
  from bson.objectid import ObjectId
  _id = ObjectId(person_id)
  all_updates = {
    "$set": {"popular": True},
    "$inc": {"age": 1},
    "$rename": {"first_name": "first", "last_name": "dsf"}
  }
  person_collection.update_one({"_id":_id},all_updates)
  
#update_person_by_id('63ab14b2de16751f8ac4c347')

def replace_one(person_id):
  from bson.objectid import ObjectId
  _id = ObjectId(person_id)

#replace_one()

def delete_doc_by_iid(person_id):
  from bson.objectid import ObjectId
  _id = ObjectId(person_id)
  person_collection.delete_one({"_id": _id})

#delete_doc_by_iid('63ab14b2de16751f8ac4c348')

