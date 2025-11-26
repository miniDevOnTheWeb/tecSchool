import { useQuery } from "@tanstack/react-query";
import teachers from '../../../mocks/mockedTeachers.json'
import type { Teacher } from "../../../types/interfaces";

async function getTeacherData (id : string) {
  await new Promise(res => setTimeout(res, 2000))
  return teachers.find(teacher => teacher.id === id) as Teacher
}

export const useSelectedTeacher = (id : string) => useQuery({
  queryKey: ['selectedTeacher', id],
  queryFn: () => getTeacherData(id)
})