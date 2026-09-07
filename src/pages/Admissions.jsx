function Admissions({ admissions, onView }) {
  return (
    <div className="students-container">
      <div className="page-header">
        <div>
          <h1>Admissions</h1>
          <p>Students who have completed the admission process</p>
        </div>

        <span className="student-count">
          {admissions.length} Admitted
        </span>
      </div>

      {admissions.length === 0 ? (
        <div className="empty-state">
          <h3>No Admissions Yet</h3>
          <p>Completed admissions will appear here.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class</th>
                <th>Admission No.</th>
                <th>Admission Date</th>
                <th>Section</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {admissions.map((admission, index) => (
                <tr key={index}>
                  <td>
                    <strong>{admission.studentName}</strong>
                  </td>

                  <td>Class {admission.className}</td>

                  <td>{admission.admissionNumber}</td>

                  <td>{admission.admissionDate}</td>

                  <td>{admission.section}</td>

                  <td>
                    <span className="status-badge">
                      Admitted
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-button"
                      onClick={() => onView(admission)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admissions;