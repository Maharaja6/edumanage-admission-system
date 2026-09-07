function AdmissionDetails({ admission, onBack }) {
  return (
    <div className="details-container">
      <div className="page-header">
        <div>
          <h1>Admission Details</h1>
          <p>Complete information about the admitted student</p>
        </div>
      </div>

      <div className="student-details">
        <h2>Student Information</h2>

        <div className="details-grid">
          <div className="detail-item">
            <span>Student Name</span>
            <strong>{admission.studentName}</strong>
          </div>

          <div className="detail-item">
            <span>Class</span>
            <strong>Class {admission.className}</strong>
          </div>

          <div className="detail-item">
            <span>Parent Name</span>
            <strong>{admission.parentName}</strong>
          </div>

          <div className="detail-item">
            <span>Phone</span>
            <strong>{admission.phone}</strong>
          </div>

          <div className="detail-item">
            <span>Email</span>
            <strong>{admission.email}</strong>
          </div>

          <div className="detail-item">
            <span>Admission Number</span>
            <strong>{admission.admissionNumber}</strong>
          </div>

          <div className="detail-item">
            <span>Admission Date</span>
            <strong>{admission.admissionDate}</strong>
          </div>

          <div className="detail-item">
            <span>Section</span>
            <strong>{admission.section}</strong>
          </div>

          <div className="detail-item">
            <span>Status</span>
            <strong>Admitted</strong>
          </div>
        </div>

        <div className="detail-item address-item">
          <span>Address</span>
          <strong>{admission.address}</strong>
        </div>

        <div className="details-actions">
          <button className="secondary-button" onClick={onBack}>
            ← Back to Admissions
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdmissionDetails;
