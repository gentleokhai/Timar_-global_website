from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phonenumber = db.Column(db.String(20), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(80), nullable=False, default='user')

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if 'username' not in data or 'email' not in data or 'phonenumber' not in data or 'password' not in data:
        return jsonify(message='Invalid data'), 400

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        username=data['username'],
        email=data['email'],
        phonenumber=data['phonenumber'],
        password=hashed_password,
        role=data.get('role', 'user')
    )
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify(message='User registered successfully'), 201
    except Exception as e:
        print(f"Error: {e}")
        return jsonify(message='Registration failed'), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={'username': user.username, 'role': user.role})
        return jsonify(access_token=access_token, role=user.role), 200
    else:
        return jsonify(message='Invalid credentials'), 401

@app.cli.command('init-db')
def init_db():
    """Initialize the database."""
    with app.app_context():
        db.create_all()
        print("Database and tables created")

if __name__ == '__main__':
    app.run(debug=True)
