function Dialog(props) {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h2>Thanks for rating</h2>

        <button onClick={props.closeDialog}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Dialog;