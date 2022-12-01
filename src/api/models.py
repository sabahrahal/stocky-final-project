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

class Company(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)
    rif = db.Column(db.String(120), unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __init__(self, **kwargs):
        self.name = kwargs["name"]
        self.rif = kwargs["rif"]
        self.user_id = kwargs["user_id"]
    
    @classmethod
    def create(cls, **kwargs):
        new_company = cls(**kwargs)
        db.session.add(new_company)

        try:
            db.session.commit()
            return new_company
        except Exception as Error: 
            raise Exception(Error.args[0], 400)
    
    def serialize(self): 
        return {
            "id" : self.id,
            "name" : self.name,
            "rif" : self.rif,
            "user_id" : self.user_id 
        }

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False, unique=True)
    phone = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(80), nullable=False)
    rif = db.Column(db.String(120))
    address = db.Column(db.String(120))
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))

    def __init__(self,**kwargs):
        self.name = kwargs["name"]
        self.phone = kwargs["phone"]
        self.email = kwargs["email"]
        self.rif = kwargs["rif"]
        self.address = kwargs["address"]
        self.company_id = kwargs["company_id"]

    @classmethod
    def create(cls, **kwargs):
        new_supplier = cls(**kwargs)
        db.session.add(new_supplier)

        try:
            db.session.commit()
            return new_supplier
        except Exception as Error: 
            raise Exception(Error.args[0], 400)
    
    def serialize(self): 
        return {
            "id" : self.id,
            "name" : self.name,
            "phone" : self.phone,
            "email" : self.email, 
            "rif" : self.rif,
            "address" : self.address,
            "company_id" : self.company_id, 
        }

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    buying_cost = db.Column(db.Float, nullable=False)
    selling_cost = db.Column(db.Float, nullable=False)
    details = db.Column(db.String(120))
    serial_number = db.Column(db.String(120))
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'))
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))

    def __init__(self, **kwargs):
        self.name = kwargs["name"]
        self.quantity = kwargs["quantity"]
        self.buying_cost = kwargs["buying_cost"]
        self.selling_cost = kwargs["selling_cost"]
        self.details = kwargs["details"]
        self.serial_number = kwargs["serial_number"]
        self.supplier_id = kwargs["supplier_id"]
        self.company_id = kwargs["company_id"]
    
    @classmethod
    def create(cls, **kwargs):
        new_product = cls(**kwargs)
        db.session.add(new_product)

        try:
            db.session.commit()
            return new_product
        except Exception as Error: 
            raise Exception(Error.args[0], 400)
    
    def serialize(self): 
        return {
            "id" : self.id,
            "name" : self.name,
            "quantity" : self.quantity,
            "buying_cost" : self.buying_cost, 
            "selling_cost" : self.selling_cost,
            "details" : self.details,
            "serial_number" : self.serial_number, 
            "supplier_id" : self.supplier_id,
            "company_id" : self.company_id
        }



