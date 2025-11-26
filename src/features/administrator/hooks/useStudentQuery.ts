import { useQuery } from "@tanstack/react-query"
import students from "../../../mocks//mockedUser.json"
import type { Student } from "../../../types/interfaces"

async function getStudents (grade?:string, section?:string) {
  await new Promise(res => setTimeout(res, 3000))
  return students.filter(student => student.section === section && student.grade === grade) as Student[]
}

export const useStudentsQuery = (grade: string, section:string) => {
  return useQuery({
    queryKey: ['students', grade, section],
    queryFn: ()   => getStudents(grade, section),
    refetchOnWindowFocus: true,
    staleTime: 0
  })
}