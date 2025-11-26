import { useQuery } from "@tanstack/react-query"
import rooms from '../../../mocks/mockedRooms.json'
import type { RoomInterface } from "../../../types/interfaces"

async function getRooms () {
  await new Promise(res => setTimeout(res, 3000))
  return rooms as RoomInterface[]
}

export const useRoomsQuery = () => {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms
  })
}