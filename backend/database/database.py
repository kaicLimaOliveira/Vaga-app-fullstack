from datetime import datetime
from pymongo import MongoClient
from bson import ObjectId
from database import config


class Database:
    def __init__(self):
        self.client = MongoClient(config.var_env['db_mongo'][config.env]['url'])  # configure db url
        self.db = self.client[config.var_env['db_mongo'][config.env]['database']]

    def insert(self, element, collection_name):
        element["created_at"] = datetime.now()
        element["updated_at"] = datetime.now()

        inserted = self.db[collection_name].insert_one(element)  # insert data to db
        return str(inserted.inserted_id)

    def find(self, criteria, collection_name, projection=None, sort=None, limit=0, cursor=False):  # find all from db

        if "_id" in criteria:
            criteria["_id"] = ObjectId(criteria["_id"])

        found = self.db[collection_name].find(filter=criteria, projection=projection, limit=limit, sort=sort)

        if cursor:
            return found

        found = list(found)

        for i in range(len(found)):  # to serialize object id need to convert string
            if "_id" in found[i]:
                found[i]["_id"] = str(found[i]["_id"])

        return found