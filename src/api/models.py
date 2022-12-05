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
    img_url = db.Column(db.String(240))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    customer_order = db.relationship("Customer_order", backref="company")

    def __init__(self, **kwargs):
        self.name = kwargs["name"]
        self.rif = kwargs["rif"]
        self.user_id = kwargs["user_id"]
        self.img_url = kwargs["img_url"]
    
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
            "img_url": self.img_url,
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
    product = db.relationship("Product", backref="supplier")

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
    stock_alert = db.Column(db.Boolean, nullable=True, default=False)
    stock_quantity_alert = db.Column(db.Integer, default=5)
    customer_order = db.relationship("Customer_order", backref="product")

    def __init__(self, **kwargs):
        self.name = kwargs["name"]
        self.quantity = kwargs["quantity"]
        self.buying_cost = kwargs["buying_cost"]
        self.selling_cost = kwargs["selling_cost"]
        self.details = kwargs["details"]
        self.serial_number = kwargs["serial_number"]
        self.supplier_id = kwargs["supplier_id"]
        self.company_id = kwargs["company_id"]
        self.stock_alert = kwargs["stock_alert"]
        self.stock_quantity_alert = kwargs["stock_quantity_alert"]
    
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
            "company_id" : self.company_id,
            "supplier_name" : self.supplier.name,
            "stock_alert" : self.stock_alert,
            "stock_quantity_alert" : self.stock_quantity_alert
        }

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    document_identity = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(120))
    address = db.Column(db.String(240))
    email = db.Column(db.String(240))
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    customer_order = db.relationship("Customer_order", backref="customer")

    def __init__(self, **kwargs):
        self.name = kwargs["name"]
        self.document_identity = kwargs["document_identity"]
        self.phone = kwargs["phone"]
        self.address = kwargs["address"]
        self.email = kwargs["email"]
        self.company_id = kwargs["company_id"]
    
    @classmethod
    def create(cls, **kwargs):
        new_customer = cls(**kwargs)
        db.session.add(new_customer)

        try:
            db.session.commit()
            return new_customer
        except Exception as Error: 
            raise Exception(Error.args[0], 400)
    
    def serialize(self): 
        return {
            "id" : self.id,
            "name" : self.name,
            "document_identity" : self.document_identity,
            "phone" : self.phone, 
            "address" : self.address,
            "email" : self.email,
            "company_id" : self.company_id
        }

class Customer_order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'))
    pay_method = db.Column(db.String(80))

    def __init__(self, **kwargs):
        self.pay_method = kwargs["pay_method"]
        self.company_id = kwargs["company_id"]
        self.customer_id = kwargs["customer_id"]
        self.product_id = kwargs ["product_id"]
    
    @classmethod
    def create(cls, **kwargs):
        new_customer_order = cls(**kwargs)
        db.session.add(new_customer_order)
    
        try:
            db.session.commit()
            return new_customer_order
        except Exception as Error: 
            raise Exception(Error.args[0], 400)
    
    def serialize(self): 
        return {
            "id" : self.id,
            "company_id" : self.company_id,
            "customer_id" : self.customer_id,
            "product_id" : self.product_id,
            "pay_method" : self.pay_method,
            "product_name" : self.product.name,
            "company_name": self.company.name,
            "product_selling_cost" : self.product.selling_cost,
            "customer_name": self.customer.name,
            "customer_document_identity": self.customer.document_identity,
            "customer_phone": self.customer.phone,
            "customer_address": self.customer.address
        }



