from flask import jsonify, redirect
from models import PublishedModel 

class Publishers:
    def __init__(self):
        self.publisher = PublishedModel.Publishers()
    
    def index(self, req):
        vacancys = self.publisher.find({})
        return jsonify(vacancys)
    
    def new_vacancy(self, req):
        try:
            if req.method == 'POST':
                data = req.get_json()

                title = data['title']
                description = data['description']
                salary = data['salary']
                modality = data['modality']
                type = data['type']
                
                can_create = True
                if not title:
                    can_create = False
                if not description:
                    can_create = False
                if not salary:
                    can_create = False
                if not modality:
                    can_create = False
                if not type:
                    can_create = False
            
                if can_create:
                    new_vacancy = {
                        "title": title,
                        "description": description,
                        "salary": salary,
                        "modality": modality,
                        "type": type
                    }
                    
                    self.publisher.create(new_vacancy)
                else:   
                    can_create = False

                return data
    
        except Exception as e: 
            print(e)
                
        