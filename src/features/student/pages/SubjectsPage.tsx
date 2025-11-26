import { InfoBar } from "../../../components/InfoBar";
import { SubjectsList } from "../components/SubjectsList";

export function SubjectsPage() {
  return (
    <div className="dashboard-section">
      <InfoBar location="Materias" />
      <SubjectsList />
    </div>
  )
}