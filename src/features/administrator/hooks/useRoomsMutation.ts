import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { RoomInterface } from "../../../types/interfaces";

const deleteRoom = async (room: RoomInterface) => {
  await new Promise(res => setTimeout(res, 2000))
  return room
}

export const useDeleteRoomMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteRoom,
    onSuccess: (room: RoomInterface) => {
      queryClient.setQueryData(['rooms'], (oldRooms: RoomInterface[]) => {
        if (!oldRooms) return []
        return oldRooms.filter((r: RoomInterface) => r.id !== room.id)
      })
    }
  })
}