from flask import jsonify, redirect
from models import PublishedModel 

class Publishers:
    def __init__(self, req):
        self.publisher = PublishedModel.Publishers()
    
    def index(self, req):
        if req == 'GET':
            vacancys = self.publisher.find({})
            print(vacancys)
            
            if len(vacancys) < 1:
                print(len(vacancys))
            else:
                return jsonify(vacancys)
    
    def new_vacancy(self, req):
        try:
            form_json = req.get_json()
            print(form_json)
            print('chegou aqui')
            
            
            title = req.form.get('titleVacancy')
            description = req.form.get('descriptionVacancy')
            salary = req.form.get('salaryVacancy')
            modality = req.form.get('modalityVacancy')
            type = req.form.get('typeVacancy')
            
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
                print('Formulario preenchido incorrentamente')
                
        except Exception as e: 
            print(e)
        