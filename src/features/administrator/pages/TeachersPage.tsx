import { GoBackBar } from "../../../components/GoBackBar"
import { NewUser } from "../../../components/Icons"
import { AdminDashboardTopBar } from "../components/DashboardTopBar"
import { TeachersTable } from "../components/TeachersTable"
import { useTeachersQuery } from "../hooks/useTeachersQuery"

export function TeachersPage () {
  const { data, isLoading } = useTeachersQuery()

  return (
    <>
      <AdminDashboardTopBar text="Lista de maestros" lenght={data?.length || 0} />
      <GoBackBar to="/admin-dashboard/teachers/create-teacher" icon={<NewUser width={22}/>} />
      <div className="dashboard-section">
        <TeachersTable teachers={data || []} isLoading={isLoading} />
      </div>
    </>
  )
}