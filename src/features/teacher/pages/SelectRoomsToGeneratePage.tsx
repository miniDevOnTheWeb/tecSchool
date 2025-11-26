import { SelectRoomToGenerateList } from "../components/SectionsListToGenerate"
import { useRoomsQuery } from "../../../hooks/useRoomsQuery"

export function SelectRoomsPageToGenerate() {
  const { data, isLoading } = useRoomsQuery()
  return (
    <>
      <div className="dashboard-section">
        {!isLoading && <h4 className="message">Selecciona un aula</h4>}
        <SelectRoomToGenerateList rooms={data || []} isLoading={isLoading} />
      </div>
    </>
  )
}