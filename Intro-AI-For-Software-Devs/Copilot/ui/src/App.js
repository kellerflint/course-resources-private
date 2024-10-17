import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [greScore, setGreScore] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [uniRating, setUniRating] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        gre_score: parseInt(greScore),
        cgpa: parseFloat(cgpa),
        uni_rating: parseInt(uniRating),
      });
      console.log('Prediction:', response.data.predicted);
      setResult(response.data.predicted);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admission Predictor</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              GRE Score:
              <input
                type="number"
                value={greScore}
                onChange={(e) => setGreScore(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              CGPA:
              <input
                type="number"
                step="0.01"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              University Rating:
              <input
                type="number"
                value={uniRating}
                onChange={(e) => setUniRating(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Predict</button>
        </form>
        {result !== null && (
          <div>
            <h2>Chance of Admit: {result}</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
