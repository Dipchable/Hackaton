# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import json
import os
import random
import string

app = Flask(__name__)


@app.route('/visit', methods=['post', 'get'])
def visit():
    test = ''
    with open("test.json", "r") as read_file:
        data = (json.load(read_file))
    if request.method == 'GET':
        test = data
    return test 

@app.route('/register', methods=['post', 'get'])
def register():
    test = ''
    email = ''
    type_employer = ''
    if request.method == 'POST':
        email = request.form.get('email')
        type_employer = request.form.get('type_employer')
        pool=string.ascii_letters
        password = ''.join(random.choice(pool))
        for i in range(8):
            password = password + ''.join(random.choice(pool))
        data = {
            "email":email,
            "password":password,
            "name": " ",
            "surname":" ",
            "type_employer":type_employer
        }
        path = email+'.json'
        with open(os.path.join(os.path.dirname(__file__),'users',path), "w") as write_file:
            json.dump(data, write_file)

    return render_template('register.html')
@app.route('/loging', methods=['post', 'get'])
def login():
    password = ''
    email = ''
    message = ''
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        path = email+'.json'
        if os.path.join(os.path.dirname(__file__),'users',path):
            with open(os.path.join(os.path.dirname(__file__),'users',path), "r") as read_file:
                data = json.load(read_file)
            if data["password"] == password:
                message = 'password correct'
            else:
                message = 'password incorrect'

    return render_template('login.html', message = message)

if __name__ == "__main__":
    app.run(debug = 'true', host='127.0.0.1', port=5000) 