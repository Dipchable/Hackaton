# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import json
import os
import random
import string
import smtplib

app = Flask(__name__)


@app.route('/visit', methods=['post', 'get'])
def visit():
    test = ''
    with open("test.json", "r") as read_file:
        data = (json.load(read_file))
    if request.method == 'GET':
        test = data
    return test


@app.route('/register/<email>/<type_employer>', methods=['post', 'get'])
def register(email, type_employer):

    if request.method == 'POST':

        pool = string.ascii_letters
        password = ''.join(random.choice(pool))
        for i in range(8):
            password = password + ''.join(random.choice(pool))
        data = {
            "email": email,
            "password": password,
            "name": " ",
            "surname": " ",
            "type_employer": type_employer
        }

        path = email+'.json'
        with open(os.path.join(os.path.dirname(__file__), 'users', path), "w") as write_file:
            json.dump(data, write_file)
        smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
        smtpObj.starttls()
        smtpObj.login('hackaton.unknown.brain@gmail.com','Dima123456Aa')
        TO = email
        FROM = 'hackaton.unknown.brain@gmail.com'
        smtpObj.sendmail('hackaton.unknown.brain@gmail.com', TO, 'Your password mts: '+password)
        smtpObj.quit()
    return render_template('register.html')


@app.route('/loging/<email>/<password>', methods=['post', 'get'])
def login(email, password):
    message = ''
    if request.method == 'POST':

        path = email+'.json'
        if os.path.join(os.path.dirname(__file__), 'users', path):
            with open(os.path.join(os.path.dirname(__file__), 'users', path), "r") as read_file:
                data = json.load(read_file)
            if data["password"] == password:
                message = 'password correct'
            else:
                message = 'password incorrect'

    return message

if __name__ == "__main__":
    app.run(debug='true', host='127.0.0.1', port=5000)
