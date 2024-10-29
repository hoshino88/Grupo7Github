import os
import logging
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_httpauth import HTTPBasicAuth
from flask_admin import Admin

db = SQLAlchemy()
migrate = Migrate()
auth = HTTPBasicAuth()
admin = Admin(name='Super App', template_mode='bootstrap4')

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile(os.path.join('config', 'config.py'))

    # Configuração do logger
    log_dir = os.path.join(os.path.dirname(__file__), '..', 'log')
    os.makedirs(log_dir, exist_ok=True)
    logging.basicConfig(filename=os.path.join(log_dir, 'app.log'), level=logging.INFO)

    # Inicializar as extensões
    db.init_app(app)
    migrate.init_app(app, db)
    admin.init_app(app)

    # Registrar blueprints
    from .views.auth_views import auth_bp
    from .views.admin_views import admin_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(admin_bp)


    return app
