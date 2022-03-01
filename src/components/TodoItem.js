export default function TodoItem(props) {
  return (
    <li className="form-check mb-2">
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
        className="ms-1 link-button text-primary"
        onClick={(e) => props.onEditItem({ id: props.item.id })}>Edit</button>
      <button
        type="button"
        className="ms-1 link-button text-danger"
        onClick={(e) => props.onDeleteItem({ id: props.item.id })}>Delete</button>
    </li>
  );
}