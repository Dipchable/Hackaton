# -*- coding: utf-8 -*-
from flask import Flask, render_template, request
import json


app = Flask(__name__)


@app.route('/', methods=['post', 'get'])
def login():
    test = ''
    with open("test.json", "r") as read_file:
        data = (json.load(read_file))
    if request.method == 'POST':
        test = data
    return render_template('index.html', test = test)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=3000) 