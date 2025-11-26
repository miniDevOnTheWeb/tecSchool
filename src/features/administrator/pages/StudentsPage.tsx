import { useSearchParams } from "react-router-dom"
import { AdminDashboardTopBar } from "../components/DashboardTopBar"
import { useStudentsQuery } from "../hooks/useStudentQuery"
import { StudentsTable } from "../components/StudentsTable"
import { GoBackBar } from "../../../components/GoBackBar"

export function StudentsPage () {
  const [ searchParams ] = useSearchParams()
  const section = searchParams.get("section")
  const grade = searchParams.get("grade")

  const { data, isLoading } = useStudentsQuery(grade!, section!)

  return (
    <>
      <AdminDashboardTopBar text="Lista de estudiantes" lenght={data?.length} />
      <GoBackBar back={true} />
      <div className="dashboard-section">
        <StudentsTable students={data || []} isLoading={isLoading} />
      </div>
    </>
  )
}