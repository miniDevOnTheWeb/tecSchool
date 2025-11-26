import { CalificationIcon, FolderIcon, HomeIcon, MedalIcon, UserIcon } from "../../../components/Icons";
import { NavigateButton } from "../../../components/NavigateButton";

export function StudentSideMenu() {
  return (
    <div className="side-menu">
      <ul className="side-menu-list">
        <li className="img-item"><img src="logo" className="school-logo" alt="" /></li>
        <li><NavigateButton icon={<HomeIcon width={25} />} startsWith="/student-dashboard/home" to="/student-dashboard/home" text="Inicio" className="side-button" /></li>

        <li><NavigateButton icon={<CalificationIcon width={25} />} to="/student-dashboard/califications" startsWith="/student-dashboard/califications" text="Calificaciones" className="side-button" /></li>

        <li><NavigateButton icon={<FolderIcon width={25} />} to="/student-dashboard/subjects" startsWith="/student-dashboard/subjects" text="Materias" className="side-button" /></li>

        <li><NavigateButton icon={<MedalIcon width={25} />} to="/student-dashboard/scores" startsWith="/student-dashboard/scores" text="Estadisticas" className="side-button" /></li>

        <li><NavigateButton icon={<UserIcon width={25} />} startsWith="/student-dashboard/profile" to="/student-dashboard/profile" text="Perfil" className="side-button" /></li>
      </ul>
    </div>
  );
}
