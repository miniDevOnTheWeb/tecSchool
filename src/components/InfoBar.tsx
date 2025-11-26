export function InfoBar({ location }: { location: string }) {
  return (
    <nav className="info-bar">
      <ul className="info-bar-list">
        <li><h4>{location}</h4></li>
      </ul>
    </nav>
  )
}