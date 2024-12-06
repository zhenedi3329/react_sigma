import React, { useState } from "react";

const EduFlow = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div data-theme={theme}>
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <a href="#" className="nav-brand">
            <i className="fas fa-graduation-cap"></i>
            EduFlow
          </a>
          <nav className="nav-menu">
            {["Dashboard", "Courses", "Schedule", "Assignments", "Messages"].map((item, index) => (
              <a href={`#${item.toLowerCase()}`} className={`nav-item ${index === 0 ? "active" : ""}`} key={item}>
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="btn btn-icon" onClick={toggleTheme} title="Toggle Theme">
              <i className="fas fa-moon"></i>
            </button>
            <button className="btn btn-icon" title="Notifications">
              <i className="fas fa-bell"></i>
              <span className="badge badge-primary">3</span>
            </button>
            <button className="btn btn-icon" title="Profile">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="Profile"
                style={{ width: 32, height: 32, borderRadius: "50%" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Quick Actions */}
          <div className="flex items-center justify-between mb-4">
            <h1>Welcome back, John!</h1>
            <div className="flex gap-2">
              <button className="btn btn-primary">
                <i className="fas fa-play"></i>
                Start Studying
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-calendar"></i>
                Calendar
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-tasks"></i>
                Tasks
              </button>
            </div>
          </div>

          {/* Progress Overview */}
          <ProgressOverview />

          {/* Dashboard Grid */}
          <DashboardGrid />
        </div>
      </main>
    </div>
  );
};

const ProgressOverview = () => (
  <div className="card mb-4">
    <div className="card-header">
      <h2>Your Progress</h2>
      <button className="btn btn-outline">View Details</button>
    </div>
    <div className="card-body">
      <div className="grid grid-cols-3 gap-4">
        {[
          { title: "Overall Progress", value: "75%", subtitle: "75% Complete" },
          { title: "Active Courses", value: "60%", subtitle: "3 of 5 Completed" },
          { title: "Assignments", value: "90%", subtitle: "9 of 10 Submitted" },
        ].map((item) => (
          <div className="progress-item" key={item.title}>
            <h3>{item.title}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: item.value }}></div>
            </div>
            <p className="text-sm text-secondary">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DashboardGrid = () => {
  const sections = [
    { title: "Active Courses", id: "active-courses-list" },
    { title: "Upcoming Deadlines", id: "deadlines-list" },
    { title: "Recent Activities", id: "activities-list" },
    { title: "Today's Schedule", id: "schedule-list" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {sections.map((section) => (
        <div className="card" key={section.title}>
          <div className="card-header">
            <h2>{section.title}</h2>
            <button className="btn btn-outline">View All</button>
          </div>
          <div className="card-body">
            <div className="list" id={section.id}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EduFlow;
