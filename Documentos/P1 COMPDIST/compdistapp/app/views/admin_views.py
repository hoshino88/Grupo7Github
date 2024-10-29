from flask import Blueprint
from flask_admin.contrib.sqla import ModelView
from ..models.profile import Profile
from ..controllers.auth_controller import validate_authentication

admin_bp = Blueprint('admin_bp', __name__)  # Alterado o nome para 'admin_bp'

class MyModelView(ModelView):
    def is_accessible(self):
        # Validações de autenticação para acesso ao admin
        username, password = 'admin', 'password'  # Exemplo
        return validate_authentication(username, password)

    def inaccessible_callback(self, name, **kwargs):
        return "Acesso negado", 403

