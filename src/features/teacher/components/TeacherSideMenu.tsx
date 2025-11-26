import { AcademicHatIcon, ExcelIcon, HomeIcon, MedalIcon, UploadIcon, UserIcon } from "../../../components/Icons";
import { NavigateButton } from "../../../components/NavigateButton";

export function TeacherSideMenu() {
  return (
    <div className="side-menu">
      <ul className="side-menu-list">
        <li className="img-item"><img src="logo" className="school-logo" alt="" /></li>

        <li><NavigateButton icon={<HomeIcon width={25} />} startsWith="/teacher-dashboard/home" to="/teacher-dashboard/home" text="Inicio" className="side-button" /></li>

        <li><NavigateButton icon={<AcademicHatIcon width={25} />} startsWith="/teacher-dashboard/students" to="/teacher-dashboard/students/select-room" text="Estudiantes" className="side-button" /></li>

        <li><NavigateButton icon={<UploadIcon width={25} />} to="/teacher-dashboard/upload" startsWith="/teacher-dashboard/upload" text="Subir notas" className="side-button" /></li>

        <li><NavigateButton icon={<ExcelIcon width={25} />} to="/teacher-dashboard/generate/select-room" startsWith="/teacher-dashboard/generate" text="Generar plantilla" className="side-button" /></li>

        <li><NavigateButton icon={<MedalIcon width={25} />} to="/teacher-dashboard/statistics" startsWith="/teacher-dashboard/statistics" text="Estadísticas" className="side-button" /></li>

        <li><NavigateButton icon={<UserIcon width={25} />} startsWith="/teacher-dashboard/profile" to="/teacher-dashboard/profile" text="Perfil" className="side-button" /></li>
      </ul>
    </div>
  );
}
