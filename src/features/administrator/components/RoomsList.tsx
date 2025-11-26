import type { RoomInterface } from "../../../types/interfaces";
import { Room } from "./Room";
import withReactComponent from 'sweetalert2-react-content'
import Swal from "sweetalert2";
import { useDeleteRoomMutation } from "../hooks/useRoomsMutation";

const MySwal = withReactComponent(Swal);

interface Props {
  rooms: RoomInterface[];
  isLoading?: boolean;
}

export function RoomsList ({ rooms, isLoading }: Props) {
  const deleteRoomMutation = useDeleteRoomMutation()
  const onClick = (room : RoomInterface) => {
    MySwal.fire({
      title: '¿Estás seguro?',
      icon: 'question',
      text: `${room.grade} - ${room.section} se eliminara permanentemente.`,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0a0',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire(
          'Eliminado',
          `El aula ${room.grade} - ${room.section} ha sido eliminada.`,
          'success'
        )

        deleteRoomMutation.mutate(room)
      }
    })
  }

  return (
    <>
      {rooms && rooms.length > 0 && (
        <>
          <ul className="rooms-list">
            {rooms && rooms.map((room, idx) => (
              <Room room={room} idx={idx} key={idx} onClick={() => onClick(room)} />
            ))}
          </ ul>
        </>
      )}
      { isLoading && <p className="message">Cargando...</p> }
      { !isLoading && rooms?.length === 0 && <p className="message">No se encontraron aulas</p> }
    </>
  )
}