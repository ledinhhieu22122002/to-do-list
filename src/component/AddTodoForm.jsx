
// AddForm.js
function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange,
    onAddButtomSubmit
  }) {
    return (
      <form onSubmit={onAddFormSubmit} className="todolist-comment">
        <h1>TO DO LIST</h1>
        <input
          name="todo"
          type="text"
          placeholder="Nhập tại đây..."
          value={todo}
          onChange={onAddInputChange}
        />
        <button className="add" onClick={onAddButtomSubmit}>Thêm</button>
      </form>
    );
  }
export default AddTodoForm;