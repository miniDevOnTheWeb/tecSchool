import { AcademicHatIcon, GroupIcon, HomeIcon, RoomIcon, UserIcon } from "../../../components/Icons";
import { NavigateButton } from "../../../components/NavigateButton";

export function AdminSideMenu() {
  return (
    <div className="side-menu">
      <ul className="side-menu-list">
        <li className="img-item"><img src="logo" className="school-logo" alt="" /></li>
        <li><NavigateButton icon={<HomeIcon width={25} />} startsWith="/admin-dashboard/home" to="/admin-dashboard/home" text="Inicio" className="side-button" /></li>

        <li><NavigateButton icon={<GroupIcon width={25} />} to="/admin-dashboard/teachers" startsWith="/admin-dashboard/teachers" text="Profesores" className="side-button" /></li>
        
        <li><NavigateButton icon={<AcademicHatIcon width={25} />} startsWith="/admin-dashboard/students" to="/admin-dashboard/students/select-room" text="Estudiantes" className="side-button" /></li>
        
        <li><NavigateButton icon={<RoomIcon width={25} />} to="/admin-dashboard/rooms" startsWith="/admin-dashboard/rooms" text="Aulas" className="side-button" /></li>
        
        <li><NavigateButton icon={<UserIcon width={25} />} startsWith="/admin-dashboard/profile" to="/admin-dashboard/profile" text="Perfil" className="side-button" /></li>
      </ul>
    </div>
  );
}
