import React from 'react';

function DiagnosisList({ patient }) {
    return (
        <div className="diagnostic-list">
            <table>
                <thead>
                    <tr>
                        <th>Problem/Diagnosis</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {patient.diagnostic_list?.length > 0 ? (
                        patient.diagnostic_list.map((diagnosis, index) => (
                            <tr key={index}>
                                <td>{diagnosis.name}</td>
                                <td>{diagnosis.description}</td>
                                <td>{diagnosis.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{textAlign: 'center'}}>No diagnoses available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DiagnosisList;