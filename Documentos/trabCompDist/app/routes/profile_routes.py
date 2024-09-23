from flask import Blueprint, jsonify, request
from flask_httpauth import HTTPBasicAuth
from app.services.auth_service import AuthService  # Caminho correto

auth = HTTPBasicAuth()
profile_routes = Blueprint('profile_routes', __name__)

@profile_routes.route('/')
@auth.login_required
def index():
    user = auth.current_user()
    return jsonify({"message": f"Bem-vindo, {user.username}!"})

@profile_routes.route('/register', methods=['POST'])
def register():
    data = request.json
    user = AuthService.create_profile(data['username'], data['password'], data['email'])
    return jsonify({"message": f"Usuário {user.username} criado com sucesso!"})

@auth.verify_password
def verify_password(username, password):
    return AuthService.verify_password(username, password)
