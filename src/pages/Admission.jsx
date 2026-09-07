import { useState } from "react";

function Admission({ student, onComplete }) {
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [section, setSection] = useState("");
  return (
    <div className="admission-container">
      <div className="page-header">
        <div>
          <h1>Student Admission</h1>
          <p>Complete the admission process</p>
        </div>

        <span className="status-badge">Ready for Admission</span>
      </div>

      <div className="student-details">
        <h3>Student Information</h3>

        <p>
          <strong>Student Name:</strong> {student.studentName}
        </p>

        <p>
          <strong>Class:</strong> Class {student.className}
        </p>

        <p>
          <strong>Parent Name:</strong> {student.parentName}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {student.email || "Not provided"}
        </p>
      </div>

      <div className="admission-form">
        <h3>Admission Information</h3>

        <div className="form-group">
          <label>Admission Number</label>
          <input
            type="text"
            placeholder="Example: ADM2026001"
            value={admissionNumber}
            onChange={(e) => setAdmissionNumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Admission Date</label>
          <input
            type="date"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Section</label>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
          </select>
        </div>

        <button
          onClick={() =>
            onComplete({
              admissionNumber,
              admissionDate,
              section,
            })
          }
        >
          Complete Admission
        </button>
      </div>
    </div>
  );
}

export default Admission;