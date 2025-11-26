import { useQuery } from "@tanstack/react-query"
import type { RoomInterface } from "../types/interfaces"

async function getRooms() {
  const response = await fetch('http://localhost:8080/rooms/getRooms', {
    method: 'GET'
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.message || `Error: ${response.status}`)
  }

  return data.rooms as RoomInterface[]
}

export const useRoomsQuery = () => {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms
  })
}