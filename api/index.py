# api/index.py
from flask import Blueprint, jsonify
import json
import os

api_bp = Blueprint('api', __name__)

@api_bp.route('/resume')
def get_resume():
    # Get the path to the data file
    current_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(current_dir, '../data/resume_data.json')
    
    with open(data_path, 'r') as f:
        resume_data = json.load(f)
    return jsonify(resume_data)