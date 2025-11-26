export function TeacherDashboardTopBar({ text }: { text: string, lenght?: number }) {
  return (
    <nav className="dashboard-top-bar">
      <ul className="nav-bar-list">
        <li className="dashboard-nav-bar-item">{text}</li>
        <li className="dashboard-nav-bar-item">
          <input className="filter-input" type="text" placeholder="Buscar..." />
        </li>
      </ul>
    </nav>
  )
}