import { useNavigate } from "react-router-dom"
import { AcademicHatIcon, ExcelIcon, RoomIcon, UploadIcon, UserIcon } from "../../../components/Icons"
import { useUser } from "../../../hooks/useUser"
import { InfoBar } from "../../../components/InfoBar"

export function HomePage() {
  const { user } = useUser()
  const navigate = useNavigate()

  return (
    <div className="dashboard-section form-section">
      <InfoBar location={`Bienvenido ${user?.name}`} />
      <div className="welcome-page">
        <div className="welcome-section" onClick={() => navigate('/teacher-dashboard/students')}>
          <AcademicHatIcon width={50} />
          <p>Alumnos</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/teacher-dashboard/rooms')}>
          <RoomIcon width={50} />
          <p>Aulas</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/teacher-dashboard/generate/select-room')}>
          <ExcelIcon width={50} />
          <p>Generar Plantilla</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/teacher-dashboard/upload')}>
          <UploadIcon width={50} />
          <p>Subir Notas</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/teacher-dashboard/profile')}>
          <UserIcon width={50} />
          <p>Perfil</p>
        </div>
      </div>
    </div>
  )
}