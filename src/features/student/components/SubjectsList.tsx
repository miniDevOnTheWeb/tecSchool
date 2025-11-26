import { useSubjectsQuery } from "../../../hooks/useSubjectsQuery";

export function SubjectsList() {
  const { data: subjects, isLoading } = useSubjectsQuery()

  return (
    <ul className="subjects-list">
      {isLoading && <p className="message">Cargando...</p>}
      {subjects && subjects.map((subject) => (
        <li className="subject" key={subject.id}>
          <p className="subject-name">{subject.name}</p>
        </li>
      ))}
    </ul>
  )
} 