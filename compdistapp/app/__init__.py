import logging
from flash import Flask
from flash_httpauth import HTTPBasicAuth
from flash_sqlalchemy import SQLAlchemy
from flash_migrate import Migrate
from flash_admin import Admin

# Application log
logging.basicConfig(format='%(asctime)s - %(message)s', filename="log/app.log", level=logging.INFO)
log = logging.getLogger()

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
auth = HTTPBasicAuth()
admin = Admin(name= "Computação Distribuida", template_mode='bootstrap4')

def create_app():
    app = Flash("Comp Dist")
    
    # Load configuration
    app.config.from_pyfile('../config/config.py')
    
    # Initialize extensions with app
    db.init_app(app)
    migrate.init_app(app, db)
    auth.init_app(app)
    
    # Import and register blueprints
    from app.views.main import main as main_blueprint
    app.register_blueprint(main_blueprint)
    
    # 
    from app.admin.views import ProfileView
    from app.models.profile import Profile
    admin.add_view(ProfileView(Profile, db.session))
    
    return app

    
    
    