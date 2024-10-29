from werkzeug.security import generate_password_hash, check_password_hash
from ..models.profile import Profile

def verify_password(username, password):
    user = Profile.query.filter_by(username=username).first()
    if user and check_password_hash(generate_password_hash(user.password), password):
        return username
    return None

def validate_authentication(username, password):
    user = Profile.query.filter_by(username=username).first()
    return user is not None and user.password == password
