import os
import json
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder='../templates')

# Load resume data
with open(os.path.join(os.path.dirname(__file__), '../data/resume_data.json')) as f:
    resume_data = json.load(f)

@app.route('/')
def home():
    return render_template('resume.html', data=resume_data)

@app.route('/static/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return send_from_directory(os.path.join(root_dir, 'static'), filename)

if __name__ == '__main__':
    app.run(debug=True)