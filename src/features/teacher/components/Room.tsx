import { useNavigate } from "react-router-dom";
import type { RoomInterface } from "../../../types/interfaces";

interface Props {
  room: RoomInterface;
  to: string;
  idx: number;
}

export function Room({ room, idx, to }: Props) {
  const navigate = useNavigate()
  return (
    <li className="select-room" key={idx} onClick={() => navigate(to)}>
      <p>{room.grade} - {room.section}</p>
    </li>
  )
}