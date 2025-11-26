import { GoBackBar } from "../../../components/GoBackBar";
import { NewTeacherForm } from "../components/NewTeacherForm ";

export function CreateTeacherPage () {
  return (
    <>
      <GoBackBar back={true}/>
      <div className="dashboard-section form-section">
        <NewTeacherForm />
      </ div>
    </>
  )
}