import { useQuery } from "@tanstack/react-query";
import type { Student } from "../types/interfaces";

async function getStudentData(id: string) {
  try {
    const response = await fetch(`http://localhost:8080/students/${id}`)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    return data.student as Student
  } catch (error) {
    const e = error as Error
    throw new Error(e.message)
  }
}

export const useSelectedStudent = (id: string) => useQuery({
  queryKey: ['selectedStudent', id],
  queryFn: () => getStudentData(id)
})