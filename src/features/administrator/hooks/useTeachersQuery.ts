import { useQuery } from "@tanstack/react-query"
import teachers from '../../../mocks/mockedTeachers.json'
import type { Teacher } from "../../../types/interfaces"

async function getTeachers () {
  await new Promise(res => setTimeout(res, 3000))
  return teachers as Teacher[]
}

export const useTeachersQuery = () => {
  return useQuery({
    queryKey: ['teachers'],
    queryFn: getTeachers
  })
}