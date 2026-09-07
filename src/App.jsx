import "./App.css";
import { useState } from "react";

import EnquiryForm from "./pages/EnquiryForm";
import ParentConfirmation from "./pages/ParentConfirmation";
import InterestedStudents from "./pages/InterestedStudents";
import Admission from "./pages/Admission";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import Sidebar from "./components/Sidebar";
import Admissions from "./pages/Admissions";
import AdmissionDetails from "./pages/AdmissionDetails";
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [admissions, setAdmissions] = useState(() => {
    const savedAdmissions = localStorage.getItem("admissions");

    return savedAdmissions ? JSON.parse(savedAdmissions) : [];
  });
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("interestedStudents");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });
  const [enquiryCount, setEnquiryCount] = useState(() => {
    return Number(localStorage.getItem("enquiryCount")) || 0;
  });

  const [admissionCount, setAdmissionCount] = useState(() => {
    return Number(localStorage.getItem("admissionCount")) || 0;
  });
  const [page, setPage] = useState("dashboard");

  const handleSubmit = (data) => {
    setStudent(data);

    const newCount = enquiryCount + 1;
    setEnquiryCount(newCount);

    localStorage.setItem("enquiryCount", newCount);

    setPage("confirmation");
  };

  const handleConfirm = () => {
    const updatedStudents = [...students, student];

    setStudents(updatedStudents);

    localStorage.setItem(
      "interestedStudents",
      JSON.stringify(updatedStudents)
    );

    setPage("interested");
  };

  const handleView = (studentData) => {
    setStudent(studentData);
    setPage("details");
  };

  const handleNavigate = (pageName) => {
    setPage(pageName);
  };


  if (!isLoggedIn) {
    return <Login onLogin={() => {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    }} />;
  }
  return (
    <div className="app">
      <Sidebar
        currentPage={page}
        onNavigate={handleNavigate}
        onLogout={() => {
          localStorage.removeItem("isLoggedIn");
          setIsLoggedIn(false);
        }}
      />


      <main className="main-content">

        {page === "dashboard" && (
          <Dashboard
            students={students}
            enquiryCount={enquiryCount}
            admissionCount={admissionCount}
            onNavigate={handleNavigate}
          />
        )}

        {page === "enquiry" && (
          <EnquiryForm onSubmit={handleSubmit} />
        )}

        {page === "confirmation" && student && (
          <ParentConfirmation
            student={student}
            onConfirm={handleConfirm}
          />
        )}

        {page === "interested" && (
          <InterestedStudents
            students={students}
            onView={handleView}
          />
        )}

        {page === "details" && student && (
          <StudentDetails
            student={student}
            onBack={() => setPage("interested")}
            onAdmission={() => setPage("admission")}
          />
        )}

        {page === "admission" && student && (
          <Admission
            student={student}
            onComplete={(admissionData) => {
              const newAdmission = {
                ...student,
                ...admissionData,
              };

              const updatedAdmissions = [...admissions, newAdmission];

              setAdmissions(updatedAdmissions);

              localStorage.setItem(
                "admissions",
                JSON.stringify(updatedAdmissions)
              );

              setAdmissionCount(updatedAdmissions.length);

              localStorage.setItem(
                "admissionCount",
                updatedAdmissions.length
              );

              alert("Admission completed successfully!");

              setPage("admissions");
            }}
          />
        )}

        {page === "admissions" && (
          <Admissions
            admissions={admissions}
            onView={(admission) => {
              setStudent(admission);
              setPage("admission-details");
            }}
          />
        )}

        {page === "admission-details" && student && (
          <AdmissionDetails
            admission={student}
            onBack={() => setPage("admissions")}
          />
        )}

      </main>
    </div>
  );
}

export default App;