// TodoItem.js
export default function TodoItem({
    todo,
    onEditClick,
    onDeleteClick,
  }) {
    return (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => onEditClick(todo)} className="edit">&#9998;</button>
        <button onClick={() => onDeleteClick(todo.id)} className="close">x</button>
      </li>
    );
  }