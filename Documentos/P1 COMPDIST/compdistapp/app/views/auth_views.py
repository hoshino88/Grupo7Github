from flask import Blueprint, jsonify, current_app
from flask_httpauth import HTTPBasicAuth
from ..controllers.auth_controller import verify_password
from ..models.profile import Profile

auth_bp = Blueprint('auth', __name__)
auth = HTTPBasicAuth()

@auth.verify_password
def verify(username, password):
    return verify_password(username, password)

@auth_bp.route('/')
@auth.login_required
def index():
    user = auth.current_user()
    user_db = Profile.query.filter_by(username=user).first()

    if user_db:
        message_info = f"Usuário {user}, acessou o index."
        current_app.logger.info(message_info)
        return jsonify({"success": message_info})
    else:
        return jsonify({"error": "Usuário não encontrado"}), 404
