"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Company
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

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
#End User Endpoints


#Start Company Endpoints
@api.route('/create-company', methods=['POST'])
def create_company():
    new_company_data = request.json
    try:
        if "name" not in new_company_data or new_company_data["name"] == "":
            raise Exception("Company name invalid",400)
        if "rif" not in new_company_data or new_company_data["rif"] == "":
            raise Exception("Company rif invalid",400)
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

#End Company Endpoints


#Start Supplier Endpoints

#End Supplier Endpoints


#Start Product Endpoints

#End Product Endpoints
