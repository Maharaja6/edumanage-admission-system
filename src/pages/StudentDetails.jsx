function StudentDetails({ student, onAdmission, onBack }) {
  return (
    <div className="details-container">
      <div className="page-header">
        <div>
          <h1>Student Details</h1>
          <p>Review the student information before admission</p>
        </div>

        <span className="status-badge">Interested</span>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <span>Student Name</span>
          <strong>{student.studentName}</strong>
        </div>

        <div className="detail-item">
          <span>Class</span>
          <strong>Class {student.className}</strong>
        </div>

        <div className="detail-item">
          <span>Parent Name</span>
          <strong>{student.parentName}</strong>
        </div>

        <div className="detail-item">
          <span>Phone Number</span>
          <strong>{student.phone}</strong>
        </div>

        <div className="detail-item">
          <span>Email</span>
          <strong>{student.email || "Not provided"}</strong>
        </div>

        <div className="detail-item">
          <span>Address</span>
          <strong>{student.address || "Not provided"}</strong>
        </div>
      </div>

      <div className="details-actions">
        <button className="secondary-button" onClick={onBack}>
          Back
        </button>

        <button onClick={onAdmission}>
          Proceed to Admission
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;