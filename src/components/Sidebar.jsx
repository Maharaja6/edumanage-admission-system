function Sidebar({ currentPage, onNavigate, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>EduManage</h2>
        <p>Admission System</p>
      </div>

      <nav>
        <button
          className={currentPage === "dashboard" ? "active" : ""}
          onClick={() => onNavigate("dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          className={currentPage === "enquiry" ? "active" : ""}
          onClick={() => onNavigate("enquiry")}
        >
          📝 Student Enquiry
        </button>

        <button
          className={currentPage === "interested" ? "active" : ""}
          onClick={() => onNavigate("interested")}
        >
          ⭐ Interested Students
        </button>

        <button
          className={currentPage === "admissions" ? "active" : ""}
          onClick={() => onNavigate("admissions")}
        >
          🎓 Admissions
        </button>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-button" onClick={onLogout}>
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;