import { TeacherDashboardTopBar } from "../components/DashboardTopBar"
import { useStudentsQuery } from "../hooks/useStudentQuery"
import { StudentsTable } from "../components/StudentsTable"
import { useSearchParams } from "react-router-dom"
import { GoBackBar } from "../../../components/GoBackBar"

export function StudentsPage() {
  const [searchParams] = useSearchParams()
  const roomId = searchParams.get("roomId")

  const { data, isLoading } = useStudentsQuery(roomId || "")

  return (
    <>
      <TeacherDashboardTopBar text="Lista de estudiantes" lenght={data?.length} />
      <GoBackBar back={true} to="/teacher-dashboard/students/select-room" />
      <div className="dashboard-section">
        <StudentsTable students={data || []} isLoading={isLoading} />
      </div>
    </>
  )
}