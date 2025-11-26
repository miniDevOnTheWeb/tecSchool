import { useNavigate } from "react-router-dom";
import type { RoomInterface } from "../../../types/interfaces";

export function SelectRoomsList ({ rooms, isLoading }:{ rooms : RoomInterface[] , isLoading?: boolean}) {
  const navigate = useNavigate()
  
  return (
    <>
      {rooms && rooms.length > 0 && (
        <>
          <ul className="sections-list">
            {rooms && rooms.map((room, idx) => (
              <li onClick={() => navigate(`/admin-dashboard/students?grade=${room.grade}&section=${room.section}`)} className="section" key={idx}>
                {room.grade}-{room.section}
              </li>
            ))}
          </ ul>
        </>
      )}
      { isLoading && <p className="message">Cargando...</p> }
      { !isLoading && rooms?.length === 0 && <p className="message">No se encontraron aulas</p> }
    </>
  )
}