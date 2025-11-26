import { SelectRoomsList } from "../components/SectionsList"
import { useRoomsQuery } from "../hooks/useRoomsQuery"

export function SelectRoomsPage () {
  const { data, isLoading } = useRoomsQuery()
  return (
    <>
      <div className="dashboard-section">
        { !isLoading && <h3 className="message">Selecciona un aula</h3>}
        <SelectRoomsList rooms={ data || [] } isLoading={isLoading} />
      </div>
    </>
  )
}