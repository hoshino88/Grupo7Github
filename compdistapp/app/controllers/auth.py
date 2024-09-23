from werkzeug.security import generate_password_hash, check_password_hash
from app import auth
from app.models.profile import Profile

@auth.verify_password
def verify_password(username, password):
    user = Profile.query.filter(Profile.username == username).first()
    if user and check_password_hash(generate_password_hash(user.password), password):
        return username

def validate_authentication(username, password):
    user = Profile.query.filter(Profile.username == username).first()
    if user and user.password == password:
        return True
    return False