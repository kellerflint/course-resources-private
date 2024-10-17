from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
CORS(app)

# Load data and train model
df = pd.read_csv("adm_data.csv")

X = df[['GRE Score', 'CGPA', 'University Rating']]
y = df['Chance of Admit ']

admit_model = LinearRegression()
admit_model.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    print("hit predicion")
    data = request.get_json()
    gre_score = data['gre_score']
    cgpa = data['cgpa']
    university_rating = data['uni_rating']
    
    prediction = admit_model.predict([[gre_score, cgpa, university_rating]])
    print("prediction", prediction)
    return jsonify({'predicted': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)


#{
#    "gre_score": 337,
#    "cgpa": 8.7,
#    "nui_rating": 4
#}