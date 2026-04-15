import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


function DiagnosisHistory({ patient}) {
    const latest = patient.diagnosis_history[0];

    const months = patient.diagnosis_history.slice(0, 6).reverse();

    const labels = months.map(m => `${m.month} ${m.year}`);
    const systolicData = months.map(m => m.blood_pressure.systolic.value);
    const diastolicData = months.map(m => m.blood_pressure.diastolic.value);

    const data = {
        labels,
        datasets: [
            {
                label : 'Systolic',
                data: systolicData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension : 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
            {
                label : 'Diastolic',
                data: diastolicData,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension : 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }
        ]};

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { min:60, max: 180, grid: {color: 'rgba(0, 0, 0, 0.1)'} },
            x: { grid: {display: false} }
        }
    };
    
    return (
        <div className="diagnosis-history">
            <h3>Diagnosis History</h3>

            <div className="chart-section">
                <div className="chart-wrapper" style={{height: '200px'}}>
                <Line data={data} options={options} />
                </div>

                <div className="bp-values">
                    <div className="bp-item">
                        <span className="bp-dot systolic"></span>
                        <p>Systolic</p>
                        <h2>{months[months.length-1]?.blood_pressure.systolic.value}</h2>
                        <span>↑ Higher than Average</span>
                    </div>

                    <hr />

                    <div className="bp-item">
                        <span className="bp-dot diastolic"></span>
                        <p>Diastolic</p>
                        <h2>{months[months.length-1]?.blood_pressure.diastolic.value}</h2>
                        <span>↓ Lower than Average</span>
                    </div>
                </div>
            </div>

            <div className="vitals-cards">
                <div className="vital-card blue">
                    <p>🫁 Respiratory Rate</p>
                    <h2>{latest.respiratory_rate.value || "N/A"} bpm</h2>
                    <span>{latest.respiratory_rate.levels || "N/A"}</span>
                </div>

                <div className="vital-card pink">
                    <p>🌡️ Temperature</p>
                    <h2>{latest.temperature.value || "N/A"}°F</h2>
                    <span>{latest.temperature.levels || "N/A"}</span>
                </div>

                <div className="vital-card red">
                    <p>❤️ Heart Rate</p>
                    <h2>{latest.heart_rate.value || "N/A"} bpm</h2>
                    <span>{latest.heart_rate.levels || "N/A"}</span>
                </div>
            </div>
        </div>
    );
}

export default DiagnosisHistory;