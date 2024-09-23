import logging
from flask import Flask
from flask_httpauth import HTTPBasicAuth
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_admin import Admin

# Application log
logging.basicConfig(format='%(asctime)s - %(message)s', filename="logs/app.log", level=logging.INFO)
log = logging.getLogger()

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
auth = HTTPBasicAuth()
admin = Admin(name='Super App', template_mode='bootstrap4')

def create_app():
    app = Flask("Comp Dist")
    
    # Load configuration
    app.config.from_pyfile('../config/config.py')
    
    # Initialize extensions with app
    db.init_app(app)
    migrate.init_app(app, db)
    admin.init_app(app)
    
    # Import and register blueprints
    from app.views.main import main as main_blueprint
    app.register_blueprint(main_blueprint)
    
    # Import and add admin views
    from app.admin.views import ProfileView
    from app.models.profile import Profile
    admin.add_view(ProfileView(Profile, db.session))
    
    return app