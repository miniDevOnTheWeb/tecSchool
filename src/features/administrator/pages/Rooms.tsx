import { GoBackBar } from "../../../components/GoBackBar"
import { NewRoomIcon } from "../../../components/Icons"
import { AdminDashboardTopBar } from "../components/DashboardTopBar"
import { RoomsList } from "../components/RoomsList"
import { useRoomsQuery } from "../hooks/useRoomsQuery"

export function RoomsPage () {
  const { data, isLoading } = useRoomsQuery()
  return (
    <>
      <AdminDashboardTopBar text="Lista de aulas" lenght={data?.length} />
      <GoBackBar to="/admin-dashboard/rooms/create-room" icon={<NewRoomIcon width={20} />} />
      <div className="dashboard-section">
        <RoomsList rooms={ data || [] } isLoading={isLoading} />
      </div>
    </>
  )
}