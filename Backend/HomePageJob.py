# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import json
import os

# options.add_argument('--disable-web-security')

app = Flask(__name__)

@app.route('/visit', methods=['post', 'get'])
def login():
    test = ''
    with open("test.json", "r") as read_file:
        data = (json.load(read_file))
    if request.method == 'GET':
        test = data
    return test 

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000) 
