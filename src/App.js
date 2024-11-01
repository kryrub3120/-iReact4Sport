// src/App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import './App.css';
import logo from './logo.png';

// Normative data for ages 10 to 14
const normativeData = {
  "10": {
    "M": { "LBRT_2HAND_best_time": { "90": 859.94, "75": 810.41, "50": 756.00, "25": 701.59, "10": 652.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 959.35, "75": 883.41, "50": 800.00, "25": 716.59, "10": 640.65 } }
  },
  "11": {
    "M": { "LBRT_2HAND_best_time": { "90": 829.94, "75": 780.41, "50": 726.00, "25": 671.59, "10": 622.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 929.35, "75": 853.41, "50": 770.00, "25": 686.59, "10": 610.65 } }
  },
  "12": {
    "M": { "LBRT_2HAND_best_time": { "90": 799.94, "75": 750.41, "50": 696.00, "25": 641.59, "10": 592.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 899.35, "75": 823.41, "50": 740.00, "25": 656.59, "10": 580.65 } }
  },
  "13": {
    "M": { "LBRT_2HAND_best_time": { "90": 769.94, "75": 720.41, "50": 666.00, "25": 611.59, "10": 562.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 869.35, "75": 793.41, "50": 710.00, "25": 626.59, "10": 550.65 } }
  },
  "14": {
    "M": { "LBRT_2HAND_best_time": { "90": 739.94, "75": 690.41, "50": 636.00, "25": 581.59, "10": 532.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 839.35, "75": 763.41, "50": 680.00, "25": 596.59, "10": 520.65 } }
  },
  "15": {
    "M": { "LBRT_2HAND_best_time": { "90": 739.94, "75": 690.41, "50": 636.00, "25": 581.59, "10": 532.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 839.35, "75": 763.41, "50": 680.00, "25": 596.59, "10": 520.65 } }
  },
  "16": {
    "M": { "LBRT_2HAND_best_time": { "90": 739.94, "75": 690.41, "50": 636.00, "25": 581.59, "10": 532.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 839.35, "75": 763.41, "50": 680.00, "25": 596.59, "10": 520.65 } }
  },
  "17": {
    "M": { "LBRT_2HAND_best_time": { "90": 739.94, "75": 690.41, "50": 636.00, "25": 581.59, "10": 532.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 839.35, "75": 763.41, "50": 680.00, "25": 596.59, "10": 520.65 } }
  },
  "18": {
    "M": { "LBRT_2HAND_best_time": { "90": 739.94, "75": 690.41, "50": 636.00, "25": 581.59, "10": 532.06 } },
    "K": { "LBRT_2HAND_best_time": { "90": 839.35, "75": 763.41, "50": 680.00, "25": 596.59, "10": 520.65 } }
}
};

function calculatePotential(userData) {
  const ageData = normativeData[userData.CA] && normativeData[userData.CA][userData.gender];
  
  if (!ageData) {
    return { potential: "N/A", description: "Normy nie są dostępne dla podanego wieku i płci." };
  }
  
  const reactionTime = parseFloat(userData.LBRT_2HAND_best_time);
  let potential, description;

  if (reactionTime <= ageData["LBRT_2HAND_best_time"]["10"]) {
    potential = 5;
    description = "bardzo wysoki";
  } else if (reactionTime <= ageData["LBRT_2HAND_best_time"]["25"]) {
    potential = 4;
    description = "wysoki";
  } else if (reactionTime <= ageData["LBRT_2HAND_best_time"]["75"]) {
    potential = 3;
    description = "przeciętny";
  } else if (reactionTime <= ageData["LBRT_2HAND_best_time"]["90"]) {
    potential = 2;
    description = "niski";
  } else {
    potential = 1;
    description = "bardzo niski";
  }

  return { potential, description };
}

function App() {
  const [result, setResult] = useState(null);
  const [inputData, setInputData] = useState({});

  const handleFormSubmit = (data) => {
    setInputData(data); // Save the input data
    const { potential, description } = calculatePotential(data);
    setResult({ potential, description });
  };

  return (
    <div className="App">
      <img src={logo} alt="React4Sport Logo" className="logo" />
      <h1>Predykcja Potencjału Bramkarskiego</h1>
      <InputForm onSubmit={handleFormSubmit} />

      {result && (
        <div className="result">
          <h2>Wynik:</h2>
          <p style={{ textAlign: "justify", marginBottom: "15px" }}>
  Predykcja została przeprowadzona na podstawie wyników zmodyfikowanego Testu LBRT (light board reaction time), który mierzy czas reakcji prostej na bodziec świetlny. Test ten jest używany do oceny zdolności percepcyjno-kognitywnych, uwagi i szybkości przetwarzania informacji.
</p>
          
          <p className="potential-text">
            <strong>Potencjał:</strong> {result.potential} - {result.description}
          </p>
          
          <h3>Wprowadzone dane:</h3>
          <ul>
            <li>Czas reakcji (obie ręce): {inputData.LBRT_2HAND_best_time} ms</li>
            <li>Czas reakcji (ręka dominująca): {inputData.LBRT_D_best_time} ms</li>
            <li>Czas reakcji (ręka niedominująca): {inputData.LBRT_ND_best_time} ms</li>
            <li>Wiek: {inputData.CA} lat</li>
            <li>Wzrost: {inputData.body_height} cm</li>
            <li>Masa ciała: {inputData.body_weight} kg</li>
          </ul>

          <h3>Rekomendacje dla rozwoju:</h3>
          <ul>
            <li>Ćwiczenia koordynacji ręka-oko: np. ćwiczenia z piłką reakcyjną.</li>
            <li>Ćwiczenia na zwinność i szybkie reakcje: np. drabinka treningowa.</li>
          </ul>

          <p
             className="justified-text prototype-text"
              style={{ textAlign: "justify" }}
            >
           PROTOTYP APLIKACJI opracowany w ramach projektu REACT4SPORT-GKREACTION mającego na celu opracowanie innowacyjnego systemu oceny potencjału zawodnika na pozycji bramkarza. Nr umowy o dofinansowanie: POIR.01.03.01-00-0083/V.DV.004-02.00/23.
          </p>
          
          <div className="centered-footer">
          <p style={{ margin: "5px 0", fontWeight: "bold", textAlign: "center" }}>Więcej informacji:</p>
          <p style={{ textAlign: "center" }}>
  </p>
  <a href="https://react4sport.com" target="_blank" rel="noopener noreferrer">
    <img src={logo} alt="logo.png" style={{ width: "300px", display: "block", margin: "10px auto 0" }} />
  </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;