import { useNavigate } from "react-router-dom"
import { AcademicHatIcon, GroupIcon, RoomIcon, UserIcon } from "../../../components/Icons"
import { useUser } from "../../../hooks/useUser"

export function HomePage () {
  const { user } = useUser()
  const navigate = useNavigate()

  return (
    <div className="dashboard-section form-section">
      <h3>Bienvenido {user?.name}</h3>
      <div className="welcome-page">
        <div className="welcome-section" onClick={() => navigate('/admin-dashboard/teachers')}>
          <GroupIcon width={50} />
          <p>Profesores</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/admin-dashboard/students/select-room')}>
          <AcademicHatIcon width={50} />
          <p>Alumnos</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/admin-dashboard/rooms')}>
          <RoomIcon width={50} />
          <p>Aulas</p>
        </div>
        <div className="welcome-section" onClick={() => navigate('/admin-dashboard/profile')}>
          <UserIcon width={50} />
          <p>Perfil</p>
        </div>
      </div>
    </div>
  )
}