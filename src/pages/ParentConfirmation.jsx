function ParentConfirmation({ student, onConfirm }) {
  return (
    <div className="confirmation-container">
      <h1>Parent Confirmation</h1>

      <p>Please verify the student enquiry details.</p>

      <div className="student-details">
        <p>
          <strong>Student Name:</strong> {student.studentName}
        </p>

        <p>
          <strong>Class:</strong> {student.className}
        </p>

        <p>
          <strong>Parent Name:</strong> {student.parentName}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Address:</strong> {student.address}
        </p>
      </div>

      <button onClick={onConfirm}>
        Confirm Parent
      </button>
    </div>
  );
}

export default ParentConfirmation;