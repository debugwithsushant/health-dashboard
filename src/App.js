import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosisList from './components/DiagnosisList';
import PatientProfile from './components/PatientProfile';
import './App.css';

function App() {
  const [patient, setPatient] = useState(null);
  const [allPatients, setAllPatients] = useState([]);

  useEffect(() => {
    const credentials = btoa("coalition:skills-test");

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        "Authorization": "Basic " + credentials
      }
    })
    .then(res => res.json())
    .then(data => {
    setAllPatients(data);

    const jessica = data.find(p => p.name === "Jessica Taylor");
    setPatient(jessica);
  })
    .catch(err => console.error("API Error: ", err));
  }, []);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
      <div className="App">

        <nav className="navbar">

          <div className="nav-logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">Tech.Care</span>
          </div>

          <ul className="nav-links">
            <li>Overview</li>
            <li className="active">Patients</li>
            <li>Schedule</li>
            <li>Message</li>
            <li>Transactions</li>
          </ul>

          <div className="nav-profile">
            <img src="https://fedskillstest.ct.digital/4.png" alt="Dr" className="nav-avatar" />
            <div>
              <p className="nav-name">Dr. Jose Simmons</p>
              <p className="nav-role">General Practitioner</p>
            </div>

            <span>⚙️</span>
            <span>⋮</span>
          </div>

        </nav>

        <div className="content-wrapper">
          <Sidebar patients = {allPatients} onSelect={setPatient} selected={patient.name} />
          
          <main className = "main-content">
            <DiagnosisHistory patient = {patient} />
            <DiagnosisList patient = {patient} />
          </main>

          <PatientProfile patient = {patient} />
        </div>
      </div>
  );
}

export default App;
