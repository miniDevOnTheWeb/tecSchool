import { InfoBar } from "../../../components/InfoBar";
import { UploadFileForm } from "../components/DragAndDropZone";

export function UploadCalificationPage() {
  return (
    <div className="dashboard-section form-section">
      <InfoBar location="Subir Calificaciones" />
      <UploadFileForm />
    </div>
  )
}