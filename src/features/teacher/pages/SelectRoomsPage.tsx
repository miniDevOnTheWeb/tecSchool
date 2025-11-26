import { useRoomsQuery } from "../../../hooks/useRoomsQuery"
import { SelectRoom } from "../components/SectionsList"

export function SelectRoomsPage() {
  const { data, isLoading } = useRoomsQuery()
  return (
    <>
      <div className="dashboard-section">
        {!isLoading && <h4 className="message">Selecciona un aula</h4>}
        <SelectRoom rooms={data || []} isLoading={isLoading} />
      </div>
    </>
  )
}