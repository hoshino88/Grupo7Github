import os

SECRET_KEY = 'd5zmAsUt3bZdZrBjhcpJ7T2ocQgmVXfM'
FLASH_SECRET = SECRET_KEY

FLASH_ADMIN_SWATCH = 'yeti'

# Database configuration
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///instance/usersdb.sqlite3')
SQLALCHEMY_TRACK_MODIFICATIONS = False

# Admin configuration
ADMINISTRATORS = ["admin"]


""" DATABASE = 'sqlite:///usersdb.sqlite3'
ADMINISTRATORS = ["brivaldo"]
 """