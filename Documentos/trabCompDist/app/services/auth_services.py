from werkzeug.security import generate_password_hash, check_password_hash
from app.models.profile import Profile
from flask import current_app

class AuthService:

    @staticmethod
    def verify_password(username, password):
        user = Profile.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            return user
        return None

    @staticmethod
    def create_profile(username, password, email):
        hashed_password = generate_password_hash(password)
        profile = Profile(username=username, password=hashed_password, email=email)
        with current_app.app_context():
            current_app.extensions['sqlalchemy'].db.session.add(profile)
            current_app.extensions['sqlalchemy'].db.session.commit()
        return profile
