import "./style.css";
const Model = ({ isVisable, onClickHandle, ErrorMsg, children }) => {
  if (isVisable) {
    return (
      <>
        <div className="modal-overlay">
          <div className="modal-content">
            {ErrorMsg === "Success data" ? (
              <p>{`Hi , ${children.fName} ${children.lName}`}</p>
            ) : null}
            <p
              style={{ color: ErrorMsg === "Success data" ? "#28a745" : "red" }}
            >
              {ErrorMsg}
            </p>

            <button className="close-button" onClick={onClickHandle}>
              Close
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default Model;
