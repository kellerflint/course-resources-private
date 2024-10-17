from flask import Flask, request, jsonify
import pandas as pd
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Load data and train model
df = pd.read_csv("adm_data.csv")

X = df[['GRE Score', 'CGPA', 'University Rating']]
y = df['Chance of Admit ']

admit_model = LinearRegression()
admit_model.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    gre_score = data['score']
    cgpa = data['cgpa']
    university_rating = data['ur']
    
    prediction = admit_model.predict([[gre_score, cgpa, university_rating]])
    
    return jsonify({'predicted': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)