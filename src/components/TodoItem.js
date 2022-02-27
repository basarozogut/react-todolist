export default function TodoItem(props) {
  return (
    <li className="mb-2 form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={props.item.done}
        onChange={(e) => props.onDoneStatusChange({ done: e.target.checked, id: props.item.id })} />
      <label
        className="form-check-label"
        onClick={(e) => props.onDoneStatusChange({ done: !props.item.done, id: props.item.id })}>
        <span className={props.item.done ? 'todo-item-done' : ''}>{props.item.title}</span>
      </label>
      <button
        type="button"
        className="btn btn-primary btn-sm ms-1"
        onClick={(e) => props.onEditItem({ id: props.item.id })}>Edit</button>
      <button
        type="button"
        className="btn btn-danger btn-sm ms-1"
        onClick={(e) => props.onDeleteItem({ id: props.item.id })}>Delete</button>
    </li>
  );
}