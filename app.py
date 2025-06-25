# app.py
from flask import Flask, render_template
from api import api_bp  # Import the blueprint

app = Flask(__name__)
app.register_blueprint(api_bp)  # Register the blueprint

@app.route('/')
def resume():
    return render_template('resume.html')

if __name__ == '__main__':
    app.run(debug=True)