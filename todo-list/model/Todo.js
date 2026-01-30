export default class Todo {
  constructor(todos, btnEl, actionType, content) {
    this.todos = todos;
    this.btnEl = btnEl;
    this.content = content;

    this.actionType = actionType;
    this.actions = {
      add: () => this.add(),
      toggle: (id) => this.toggle(id),
      delete: (id) => this.delete(id),
    };
    this.action();
  }

  action() {
    if (this.actionType === 'add') {
      this.actions[this.actionType]();
      return;
    }

    const id = this.getTodoId(this.btnEl);
    this.actions[this.actionType](id);
  }

  add() {
    const length = this.todos.length;

    this.todos.splice(length, 1, {
      id: this.todos.length + 1,
      content: this.content,
      done: false,
    });
  }

  toggle(id) {
    const clickedTodo = this.todos.find((todo) => todo.id === Number(id));
    clickedTodo.done = !clickedTodo.done;
  }

  delete(id) {
    const idx = this.todos.findIndex((todo) => todo.id === Number(id));
    this.todos.splice(idx, 1);
  }

  getTodoId(btnEl) {
    const li = btnEl.closest('li');
    return li.dataset.id;
  }
}
