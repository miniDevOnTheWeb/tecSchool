import { DeleteIcon } from "../../../components/Icons";
import type { RoomInterface } from "../../../types/interfaces";

interface Props {
  room: RoomInterface;
  idx: number;
  onClick: () => void;
}

export function Room ({ room , idx, onClick }: Props) {
  return (
    <li className="room" key={idx}>
      <p>{room.grade} - {room.section}</p>
      <button onClick={onClick} className="delete-item-button">
        <DeleteIcon width={22} />
      </button>
    </li>
  )
}