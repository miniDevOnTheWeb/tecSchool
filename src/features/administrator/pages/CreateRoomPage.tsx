import { GoBackBar } from "../../../components/GoBackBar";
import { NewRoomForm } from "../components/NewRoomForm";

export function CreateRoomPage () {
  return (
    <>
      <GoBackBar back={true}/>
      <div className="dashboard-section form-section">
        <NewRoomForm />
      </ div>
    </>
  )
}