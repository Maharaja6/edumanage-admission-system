function InterestedStudents({ students, onView }) {
  return (
    <div className="students-container">
      <div className="page-header">
        <div>
          <h1>Interested Students</h1>
          <p>Students who completed parent confirmation</p>
        </div>

        <span className="student-count">
          {students.length} Students
        </span>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <h3>No Interested Students</h3>
          <p>
            Confirm a student enquiry to see the student here.
          </p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class</th>
                <th>Parent Name</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>
                    <strong>{student.studentName}</strong>
                  </td>

                  <td>Class {student.className}</td>

                  <td>{student.parentName}</td>

                  <td>{student.phone}</td>

                  <td>
                    <span className="status-badge">
                      Interested
                    </span>
                  </td>

                  <td>
                    <button
                      className="view-button"
                      onClick={() => onView(student)}
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

export default InterestedStudents;