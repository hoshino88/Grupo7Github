from app import auth
from app.models.profile import Profile
from werkzeug.security import check_password_hash, generate_password_hash

@auth.verify_password
def verify_password(username, password):
    user = Profile.query.filter(Profile.username == username).first()

    if user and check_password_hash(generate_password_hash(Profile.password), password):
        return username


# Protect the Flask-Admin using username/password strings and SQLAlchemy
def validate_authentication(username, password):
    user = Profile.query.filter(Profile.username == username).first()

    if user and user.password == password:
        return True
    return False