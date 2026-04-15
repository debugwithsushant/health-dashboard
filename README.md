# 🏥 Health Dashboard (React)

A modern and responsive **Health Monitoring Dashboard** built using **React.js**, designed based on an Adobe XD template.
The application integrates real-time patient data via API and visualizes health metrics using interactive charts.

---

## 🚀 Features

* 📊 **Diagnosis History Chart**

  * Blood pressure trends using Chart.js
* 👤 **Patient Profile Panel**

  * Displays personal and medical details
* 📋 **Diagnostic List**

  * Tabular representation of patient diagnoses
* 🧠 **API Integration**

  * Fetches and renders real-time patient data
* 🎯 **Focused Data Display**

  * Displays data specifically for **Jessica Taylor** (as per instructions)
* 🧩 **Component-Based Architecture**

  * Clean and maintainable React structure
* 📱 **Responsive Design**

  * Works across different screen sizes

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** CSS (Custom)
* **Charts:** Chart.js & react-chartjs-2
* **API:** Coalition Technologies Patient Data API

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Sidebar.js
│   ├── DiagnosisHistory.js
│   ├── DiagnosisList.js
│   ├── PatientProfile.js
│
├── App.js
├── App.css
├── index.js
```

---

## 🔗 API Integration

The application fetches patient data from:

```
https://fedskillstest.coalitiontechnologies.workers.dev
```

* Uses Basic Authentication
* Extracts and displays **Jessica Taylor's** data
* Maps:

  * `diagnosis_history` → Chart
  * `diagnostic_list` → Table
  * `profile` → UI Panel

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/health-dashboard-react.git
```

2. Navigate to project folder

```
cd health-dashboard-react
```

3. Install dependencies

```
npm install
```

4. Run the application

```
npm start
```

---

## 📸 Screenshots

*(Add screenshots here if available)*

---

## 🎯 Key Highlights

* Converted Adobe XD design into a fully functional UI
* Implemented API integration and data binding
* Used Chart.js for dynamic visualization
* Followed clean coding practices and modular structure

---

## ⚠️ Notes

* Interactive features like search, dropdowns, and buttons are UI-only, as per assignment instructions
* Focus was on UI rendering, API integration, and data visualization

---

## 👨‍💻 Author

**Sushant Pawar**

---

## ⭐ Acknowledgment

This project was developed as part of a frontend skills assessment.

---