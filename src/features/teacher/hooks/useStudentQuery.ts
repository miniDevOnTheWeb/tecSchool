import { useQuery } from "@tanstack/react-query"
import type { Student } from "../../../types/interfaces"

async function getStudents(roomId: string) {
  try {
    const response = await fetch(`http://localhost:8080/students/getStudentsByRoom/${roomId}`)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    return data.students as Student[]
  } catch (error) {
    const e = error as Error
    throw new Error(e.message)
  }
}

export const useStudentsQuery = (roomId: string) => {
  return useQuery({
    queryKey: ['students'],
    queryFn: () => getStudents(roomId),
    refetchOnWindowFocus: true,
    staleTime: 0
  })
}