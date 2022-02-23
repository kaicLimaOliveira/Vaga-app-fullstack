from flask import jsonify, redirect, render_template, url_for
from matplotlib.pyplot import title
from models import PublishedModel 

class Publishers:
    def __init__(self, req):
        self.publisher = PublishedModel.Publishers()
    
    def index(self, req):
        vacancys = self.publisher.find({})
        
        print(vacancys)
        if len(vacancys) < 1:
            print('')
        else:
            return jsonify(vacancys)
    
    def new_vacancy(self, req):
        if req == 'POST':
            title = req.form.get('titleVacancy')
            description = req.form.get('descriptionVacancy')
            salary = req.form.get('salaryVacancy')
            modality = req.form.get('modalityVacancy')
            type = req.form.get('typeVacancy')
            
            new_vacancy = {
                "title": title,
                "description": description,
                "salary": salary,
                "modality": modality,
                "type": type
            }
            
            self.publisher.create(new_vacancy)
            