import os
import string
import random
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import zipfile

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

DOWNLOADS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'downloads')

def generate_tag(length=26):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def ensure_downloads_dir():
    if not os.path.exists(DOWNLOADS_DIR):
        os.makedirs(DOWNLOADS_DIR)

@app.route('/upload', methods=['POST'])
def handle_upload():
    try:
        ensure_downloads_dir()
        
        tag = generate_tag()
        
        request_dir = os.path.join(DOWNLOADS_DIR, tag)
        os.makedirs(request_dir)
        
        json_data = {}
        
        if 'apiKey' in request.form:
            json_data['apiKey'] = request.form['apiKey']
        if 'apiLink' in request.form:
            json_data['apiLink'] = request.form['apiLink']
        
        json_data['timestamp'] = datetime.now().isoformat()
        json_data['tag'] = tag
        
        instruct_path = os.path.join(request_dir, 'instruct.txt')
        with open(instruct_path, 'w') as f:
            json.dump(json_data, f, indent=2)
        
        if 'file' in request.files:
            file = request.files['file']
            if file and file.filename:
                temp_path = os.path.join(request_dir, file.filename)
                file.save(temp_path)
                zip_path = os.path.join(request_dir, 'raws.zip')
                with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                    zipf.write(temp_path, file.filename)
                os.remove(temp_path)
                json_data['filename'] = file.filename
                with open(instruct_path, 'w') as f:
                    json.dump(json_data, f, indent=2)
        
        return jsonify({
            'status': 'success',
            'tag': tag,
            'message': f'Request stored successfully with tag: {tag}'
        }), 200
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'running',
        'message': 'Server is running on localhost:1001'
    }), 200

if __name__ == '__main__':
    print("Starting server on http://localhost:1001")
    app.run(host='localhost', port=1001, debug=True) # delete if needed