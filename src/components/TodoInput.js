export default function TodoInput(props) {
  return (
    <div className="row mb-3">
      <div className="col-md-3">
        <input
          type="text"
          value={props.value}
          className="form-control"
          onChange={(e) => props.onUserInputChange({ input: e.target.value })} />
      </div>
      <div className="col-md-1">
        <button
          className="form-control"
          onClick={(e) => props.onSaveUserInput({ input: props.value })}>Save</button>
      </div>
      <div className="col-md-2">
        <button
          className="form-control"
          onClick={props.onNewItem}>New Item</button>
      </div>
    </div>
  );
}