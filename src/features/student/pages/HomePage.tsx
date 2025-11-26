import { useNavigate } from "react-router-dom"
import { CalificationIcon, FolderIcon, MedalIcon, UserIcon } from "../../../components/Icons"
import { useUser } from "../../../hooks/useUser"
import { InfoBar } from "../../../components/InfoBar"

export function HomePage() {
  const { user } = useUser()
  const navigate = useNavigate()

  return (
    <div className="dashboard-section form-section">
      <InfoBar location={`Bienvenido ${user?.name}`} />
      <div className="welcome-page">
        <div className="welcome-section" onClick={() => navigate('/student-dashboard/califications')}>
          <CalificationIcon width={50} />
          <p>Calificaciones</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/student-dashboard/subjects')}>
          <FolderIcon width={50} />
          <p>Materias</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/student-dashboard/scores')}>
          <MedalIcon width={50} />
          <p>Estadisticas</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/student-dashboard/profile')}>
          <UserIcon width={50} />
          <p>Perfil</p>
        </div>
      </div>
    </div>
  )
}