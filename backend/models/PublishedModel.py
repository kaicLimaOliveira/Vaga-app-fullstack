from database.database import Database


class Publishers:
    def __init__(self):
        self.db = Database()
        self.collection_name = 'Publishers'

    def create(self, data):
        res = self.db.insert(data, self.collection_name)
        return res

    def find(self, data, sort=None):  # find all
        return self.db.find(data, self.collection_name, None, sort)