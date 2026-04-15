import React from 'react';

function Sidebar({ patients, onSelect, selected }) {

    if(!patients || patients.length === 0) {
        return <p>Loading patients....</p>
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Patients</h2>
                <span className="search-icon">&#128269;</span>
            </div>

            <ul className="patient-list">
                {patients.map((p, index) => (
                    <li key={index} className={`patient-item ${p.name === selected ? "active" : ""}`} onClick={() => onSelect(p)}>
                    <img src={p.profile_picture} alt={p.name} className="patient-avatar" />
                    
                    <div className="patient-info">
                        <p className="patient-name">{p.name}</p>
                        <p className="patient-meta">{p.gender}, {p.age}</p>
                    </div>

                    <span className="more-icon">...</span>
                    </li>
                ))}
                </ul>
        </div>
    );
}

export default Sidebar;