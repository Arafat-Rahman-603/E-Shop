import { useNavigate } from "react-router-dom";

function Msg() {
    const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/")
  }

  return (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      tabindex="-1"
      role="dialog"
      id="modalSheet"
    >
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">No Item Found!</h1>
          </div>
          <div className="modal-body py-0">
            <p>Click Button For Go Home</p>
          </div>
          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <button type="button" className="btn btn-lg btn-primary" onClick={handleNavigate}>
             GO HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Msg;
