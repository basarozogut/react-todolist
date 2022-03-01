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
      <a
        type="button"
        className="ms-1"
        onClick={(e) => props.onEditItem({ id: props.item.id })}>Edit</a>
      <a
        type="button"
        className="ms-1"
        onClick={(e) => props.onDeleteItem({ id: props.item.id })}>Delete</a>
    </li>
  );
}