"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Company, Supplier, Product
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

#Start verify token integrity Endpoints
@api.route("/verify-token-integrity", methods=['GET'])
@jwt_required()
def verify_token_integrity():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    return jsonify("Token is valid"), 201
#End verify token integrity Endpoints

#Start User Endpoints
@api.route('/login', methods=['POST'])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(username=username, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/signup', methods=['POST'])
def sign_up():
    new_user_data = request.json
    try:
        if "username" not in new_user_data or new_user_data["username"] == "":
            raise Exception("Username invalid",400)
        if "password" not in new_user_data or new_user_data["password"] == "":
            raise Exception("Password invalid",400)
        new_user = User.create(**new_user_data)
        return jsonify(new_user.serialize()), 201
    except Exception as error: 
        return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500

@api.route("/get-user-by-id", methods=['GET'])
@jwt_required()
def get_user_by_id():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id = current_user_id).one_or_none()
    if user is not None:
        return jsonify(user.serialize()), 201
    else: 
        return jsonify("User doesn't exists or token is not verified"), 400
#End User Endpoints


#Start Company Endpoints
@api.route('/create-company', methods=['POST'])
@jwt_required()
def create_company():
    new_company_data = request.json
    current_user_id = get_jwt_identity()
    try:
        if "name" not in new_company_data or new_company_data["name"] == "":
            raise Exception("Company name invalid",400)
        if "rif" not in new_company_data or new_company_data["rif"] == "":
            raise Exception("Company rif invalid",400)
        new_company_data["user_id"] = current_user_id
        new_company = Company.create(**new_company_data)
        return jsonify(new_company.serialize()), 201
    except Exception as error: 
        return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500

@api.route('/companies', methods=['GET'])
@jwt_required()
def get_companies():
    current_user_id = get_jwt_identity()
    companies_by_id = Company.query.filter_by(user_id = current_user_id)
    companies_by_id_dictionaries = []
    for company in companies_by_id:
        companies_by_id_dictionaries.append(company.serialize())
    
    return jsonify(companies_by_id_dictionaries), 200

@api.route("/get-company-by-id/<int:company_id_param>", methods=['GET'])
@jwt_required()
def get_company_by_id(company_id_param):
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id= company_id_param, user_id = current_user_id).one_or_none()
    if verify_company_id:
        try:
            return jsonify(verify_company_id.serialize()), 201
        except Exception as error: 
            return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
    else: 
        return jsonify("Company doesn't exists or token is not verified"), 400

#End Company Endpoints


#Start Supplier Endpoints
@api.route('/create-supplier', methods=['POST'])
@jwt_required()
def create_supplier():
    current_user_id = get_jwt_identity()
    new_supplier_data = request.json
    verify_company_id = Company.query.filter_by(id = new_supplier_data["company_id"], user_id = current_user_id).one_or_none()

    if verify_company_id:
        try:
            if "name" not in new_supplier_data or new_supplier_data["name"] == "":
                raise Exception("Supplier name invalid", 400)
            if "phone" not in new_supplier_data or new_supplier_data["phone"] == "":
                raise Exception("Supplier phone invalid", 400)
            if "email" not in new_supplier_data or new_supplier_data["email"] == "":
                raise Exception("Supplier email invalid", 400)
            new_supplier = Supplier.create(**new_supplier_data)
            return jsonify(new_supplier.serialize()), 201
        except Exception as error: 
            return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
    else: 
        return jsonify("Company doesn't exists or token is not verified"), 400

@api.route('/suppliers/<int:company_id_param>', methods=['GET'])
@jwt_required()
def get_suppliers(company_id_param):
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id = company_id_param, user_id = current_user_id).one_or_none()
    
    if verify_company_id:
        suppliers_by_id = Supplier.query.filter_by(company_id = company_id_param)
        suppliers_by_id_dictionaries = []
        for supplier in suppliers_by_id:
            suppliers_by_id_dictionaries.append(supplier.serialize())

        return jsonify(suppliers_by_id_dictionaries), 200
    else:
        return jsonify("Company doesn't exists or token is not verified"), 400

@api.route('/update-supplier/<int:supplier_id_param>', methods=['PUT'])
@jwt_required()
def update_supplier(supplier_id_param):
    new_supplier_data = request.json
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id= new_supplier_data["company_id"], user_id = current_user_id).one_or_none()

    
    if verify_company_id:
        supplier = Supplier.query.filter_by(id = supplier_id_param, company_id= new_supplier_data["company_id"] ).one_or_none()
        if supplier:
            try:
                if "name" not in new_supplier_data or new_supplier_data["name"] == "":
                    raise Exception("Supplier name invalid", 400)
                if "phone" not in new_supplier_data or new_supplier_data["phone"] == "":
                    raise Exception("Supplier phone invalid", 400)
                if "email" not in new_supplier_data or new_supplier_data["email"] == "":
                    raise Exception("Supplier email invalid", 400)

                supplier.id = supplier_id_param
                supplier.name = new_supplier_data["name"]
                supplier.phone = new_supplier_data["phone"]
                supplier.email = new_supplier_data["email"]
                supplier.rif = new_supplier_data["rif"]
                supplier.address = new_supplier_data["address"]
                supplier.company_id = new_supplier_data["company_id"]
                db.session.commit()

                return jsonify(supplier.serialize()), 201
            except Exception as error: 
                return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
                
    else: 
        return jsonify("Company doesn't exists or token is not verified"), 400

@api.route("/get-supplier-by-id/<int:company_id_param>/<int:supplier_id_param>", methods=['GET'])
@jwt_required()
def get_supplier_by_id(company_id_param, supplier_id_param):
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id= company_id_param, user_id = current_user_id).one_or_none()
    if verify_company_id:
        try:
            supplier = Supplier.query.filter_by(id = supplier_id_param, company_id = company_id_param).one_or_none()
            return jsonify(supplier.serialize()), 201
        except Exception as error: 
            return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
    else: 
        return jsonify("Company doesn't exists or token is not verified"), 400


#End Supplier Endpoints


#Start Product Endpoints

@api.route('/create-product', methods=['POST'])
@jwt_required()
def create_product():
    current_user_id = get_jwt_identity()
    new_product_data = request.json
    verify_company_id = Company.query.filter_by(id = new_product_data["company_id"], user_id = current_user_id).one_or_none()
    verify_supplier_id = Supplier.query.filter_by(id = new_product_data["supplier_id"], company_id = new_product_data["company_id"]).one_or_none()

    if verify_company_id and verify_supplier_id:
        try:
            if "name" not in new_product_data or new_product_data["name"] == "":
                raise Exception("Supplier name invalid", 400)
            if "quantity" not in new_product_data or new_product_data["quantity"] == "":
                raise Exception("Supplier phone invalid", 400)
            if "buying_cost" not in new_product_data or new_product_data["buying_cost"] == "":
                raise Exception("Supplier email invalid", 400)
            if "selling_cost" not in new_product_data or new_product_data["selling_cost"] == "":
                raise Exception("Supplier email invalid", 400)
            new_product = Product.create(**new_product_data)
            return jsonify(new_product.serialize()), 201
        except Exception as error: 
            return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
    else: 
        return jsonify("Company/Supplier doesn't exists or token is not verified"), 400

@api.route('/products/<int:company_id_param>', methods=['GET'])
@jwt_required()
def get_products(company_id_param):
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id = company_id_param, user_id = current_user_id).one_or_none()
    
    if verify_company_id:
        products_by_id = Product.query.filter_by(company_id = company_id_param)
        products_by_id_dictionary = []
        for product in products_by_id:
            products_by_id_dictionary.append(product.serialize())

        return jsonify(products_by_id_dictionary), 200
    else:
        return jsonify("Company/Product doesn't exists or token is not verified"), 400

@api.route('/update-product/<int:product_id_param>', methods=['PUT'])
@jwt_required()
def update_product(product_id_param):
    new_product_data = request.json
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id= new_product_data["company_id"], user_id = current_user_id).one_or_none()
    verify_supplier_id = Supplier.query.filter_by(id = new_product_data["supplier_id"], company_id = new_product_data["company_id"]).one_or_none()

    if verify_company_id and verify_supplier_id:
        product = Product.query.filter_by(id = product_id_param, company_id= new_product_data["company_id"] ).one_or_none()
        if product:
            try:
                if "name" not in new_product_data or new_product_data["name"] == "":
                    raise Exception("Supplier name invalid", 400)
                if "quantity" not in new_product_data or new_product_data["quantity"] == "":
                    raise Exception("Supplier phone invalid", 400)
                if "buying_cost" not in new_product_data or new_product_data["buying_cost"] == "":
                    raise Exception("Supplier email invalid", 400)
                if "selling_cost" not in new_product_data or new_product_data["selling_cost"] == "":
                    raise Exception("Supplier email invalid", 400)

                product.id = product_id_param
                product.supplier_id = new_product_data["supplier_id"]
                product.company_id = new_product_data["company_id"]
                product.name = new_product_data["name"]
                product.quantity = new_product_data["quantity"]
                product.buying_cost = new_product_data["buying_cost"]
                product.selling_cost = new_product_data["selling_cost"]
                product.details = new_product_data["details"]
                product.serial_number = new_product_data["serial_number"]
                if "stock_alert" in new_product_data and "stock_quantity_alert" in new_product_data:
                    product.stock_alert = new_product_data["stock_alert"]
                    product.stock_quantity_alert = new_product_data["stock_quantity_alert"]
                db.session.commit()

                return jsonify(product.serialize()), 201
            except Exception as error: 
                return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
                
    else: 
        return jsonify("Company/Supplier/Product doesn't exists or token is not verified"), 400

@api.route('/stock-alert', methods=['PUT'])
@jwt_required()
def stock_alert():
    new_product_data = request.json
    current_user_id = get_jwt_identity()
    verify_company_id = Company.query.filter_by(id= new_product_data["company_id"], user_id = current_user_id).one_or_none()

    if verify_company_id :
        product = Product.query.filter_by(id = new_product_data["id"], company_id= new_product_data["company_id"] ).one_or_none()
        if product:
            try:
                if "stock_alert" in new_product_data and "stock_quantity_alert" in new_product_data:
                    product.stock_alert = new_product_data["stock_alert"]
                    product.stock_quantity_alert = new_product_data["stock_quantity_alert"]
                db.session.commit()

                return jsonify(product.serialize()), 201
            except Exception as error: 
                return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500
                
    else: 
        return jsonify("Company/Supplier/Product doesn't exists or token is not verified"), 400

#End Product Endpoints
