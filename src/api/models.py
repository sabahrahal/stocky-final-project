from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False ,unique=True)
    password = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(30), nullable=False)

    def __init__(self, **kwargs):
        self.username = kwargs["username"]
        self.password = kwargs["password"]
        self.email = kwargs["email"]
        self.phone = kwargs["phone"]
    
    @classmethod
    def create(cls, **kwargs):
        new_user = cls(**kwargs)
        db.session.add(new_user)

        try:
            db.session.commit()
            return new_user
        except Exception as Error: 
            raise Exception(Error.args[0], 400)
    
    def serialize(self):
        return {
            "id" : self.id,
            "username" : self.username,
            "email" : self.email,
            "phone" : self.phone
        }