import React from "react";

function PatientProfile({ patient }) {
    return (
        <div className = "profile-panel">
            <img src={patient.profile_picture} alt={patient.name} className="profile-img" />
            <h2>{patient.name}</h2>

            <div className="profile-details">
                <div className="detail-row">
                <span>📅 Date Of Birth</span>
                <strong>{patient.date_of_birth || "N/A"}</strong>
                </div>

                <div className="detail-row">
                <span>⚥ Gender</span>
                <strong>{patient.gender || "N/A"}</strong>
                </div>

                <div className="detail-row">
                <span>📞 Contact Info</span>
                <strong>{patient.phone_number || "N/A"}</strong>
                </div>

                <div className="detail-row">
                <span>🚨 Emergency Contact</span>
                <strong>{patient.emergency_contact || "N/A"}</strong>
                </div>

                <div className="detail-row">
                <span>🛡️ Insurance Provider</span>
                <strong>{patient.insurance_type || "N/A"}</strong>
                </div>
            </div>

            <button className="show-all-btn">Show All Information</button>

            <div className="lab-results">
                <h3>Lab Results</h3>
                {patient.lab_results && patient.lab_results.length > 0 ? (
                        patient.lab_results.map((result, index) => (
                        <div key={index} className="lab-item">
                        <span>{result}</span>
                        <span className = "download-icon">&#128190;</span>
                        </div>
                    ))
                    ):(
                        <p>No lab results available.</p>
                )}
            </div>
        </div>
    );
}

export default PatientProfile;