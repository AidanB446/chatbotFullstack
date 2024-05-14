import google.generativeai as genai
from flask import Flask, jsonify, request
from flask_cors import CORS


API_KEY = "YOUR_API_KEY"
genai.configure(api_key=API_KEY)

def chat_res(text) :
    model = genai.GenerativeModel('gemini-pro')
    model = model.generate_content(text)
    return model.text


app = Flask("chatbot")

CORS(app)


@app.route("/")
def connect() :
    return "<h1>connection successful</h1>"

@app.route("/chatbot", methods=['POST'])
def chatbot() :
    data = request.get_json() 
    res = {"response" : chat_res(data["message"])}
    return jsonify(res)


