import type { RoomInterface } from "../../../types/interfaces";
import { Room } from "./Room";

export function SelectRoom({ rooms, isLoading }: { rooms: RoomInterface[], isLoading?: boolean }) {

  return (
    <>
      {rooms && rooms.length > 0 && (
        <>
          <ul className="sections-list">
            {rooms && rooms.map((room, idx) => (
              <Room to={`/teacher-dashboard/students?roomId=${room.id}`} key={idx} idx={idx} room={room} />
            ))}
          </ ul>
        </>
      )}
      {isLoading && <p className="message">Cargando...</p>}
      {!isLoading && rooms?.length === 0 && <p className="message">No se encontraron aulas</p>}
    </>
  )
}