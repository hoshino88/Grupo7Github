from flask import Blueprint, jsonify
from app import auth, log
from app.models.profile import Profile

main = Blueprint('main', __name__)

@main.route('/')
def index():
    user = auth.current_user()
    user_db = Profile.query.filter(Profile.username == user)
    
    user_list = False
    try:
        user_list = user_db.all()[0]
    except IndexError:
        pass
    
    if user_list:
        message_info = f"Usuário {user}, acessou o index."
        response = {"success": message_info}
        log.info(message_info)
        return jsonify(response)

