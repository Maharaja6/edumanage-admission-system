function Dashboard({ students, enquiryCount, admissionCount, onNavigate }) {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to Student Admission Management</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Student Enquiries</h3>
          <span>{enquiryCount}</span>
        </div>

        <div className="stat-card">
          <h3>Interested Students</h3>
          <span>{students.length}</span>
        </div>

        <div className="stat-card">
          <h3>Admissions</h3>
          <span>{admissionCount}</span>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>

        <div className="action-buttons">
          <button onClick={() => onNavigate("enquiry")}>
            + New Student Enquiry
          </button>

          <button onClick={() => onNavigate("interested")}>
            View Interested Students
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;