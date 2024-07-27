from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# carregar modelo
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_features = np.array(data['features']).reshape(-1,1)
    prediction = model.predict(input_features)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(port=5000)