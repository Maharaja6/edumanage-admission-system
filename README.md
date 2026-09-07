# 🎓 EduManage — Student Admission Management System

A simple and professional **Student Admission Management System** built with **React and Vite**. The application manages the complete student admission workflow from enquiry to admission completion.

## 🌐 Live Demo

**Vercel:** https://edumanage-admission-system.vercel.app/

## 📌 Project Overview

EduManage is a frontend web application designed to simplify the student admission process.

The system allows users to:

* Submit student enquiries
* Confirm parent interest
* View interested students
* View student details
* Complete the admission process
* View all admitted students
* View complete admission details
* Login and logout
* Persist application data using Local Storage

## 🔄 Application Flow

```text
Login
  ↓
Dashboard
  ↓
Student Enquiry
  ↓
Parent Confirmation
  ↓
Interested Students
  ↓
Student Details
  ↓
Admission Form
  ↓
Admissions
  ↓
Admission Details
```

## ✨ Features

### 🔐 Login

* Simple frontend login flow
* Username and password validation
* Logout functionality

### 📊 Dashboard

* Student enquiry count
* Interested student count
* Admission count
* Quick navigation actions

### 📝 Student Enquiry

* Student name
* Class
* Parent name
* Phone number
* Email
* Address

### 👨‍👩‍👧 Parent Confirmation

* Displays student enquiry information
* Confirms parent interest

### ⭐ Interested Students

* Lists students whose parents confirmed interest
* View student details

### 🎓 Admission Management

* Admission number
* Admission date
* Section
* Admission completion

### 📋 Admissions

* Displays all completed admissions
* Shows admission status
* View complete admission details

### 💾 Local Storage

Student and admission data are stored in the browser using `localStorage`, allowing data to remain available after refreshing the page.

## 🛠️ Technologies Used

* **React.js**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Local Storage**
* **Git & GitHub**
* **Vercel**

## 📂 Project Structure

```text
src/
├── components/
│   └── Sidebar.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── EnquiryForm.jsx
│   ├── ParentConfirmation.jsx
│   ├── InterestedStudents.jsx
│   ├── StudentDetails.jsx
│   ├── Admission.jsx
│   ├── Admissions.jsx
│   └── AdmissionDetails.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Maharaja6/edumanage-admission-system.git
```

### 2. Navigate to the project

```bash
cd edumanage-admission-system
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run locally using the Vite development server.

## 🏗️ Build for Production

```bash
npm run build
```

## 👨‍💻 Developer

**Maharaja**

CSE (Cybersecurity) Graduate — 2026

## 📄 License

This project was developed as a frontend internship/project demonstration.

```
```
