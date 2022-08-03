// EditForm.js
export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {
    return (
      <form onSubmit={onEditFormSubmit} className="todolist-comment">
        <h2>TO DO LIST</h2>
        <input
          name="updateTodo"
          type="text"
          placeholder="Chỉnh sửa tại đây..."
          value={currentTodo.text}
          onChange={onEditInputChange}
          className="input--edit"
        />
        <button type="submit" onClick={onEditFormSubmit} className="update">
          Update
        </button>
        <button onClick={() => setIsEditing(false)} className="cancel">Cancel</button>
      </form>
    );
  }