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

  /**
   * 액션 타입에 따른 메서드 실행
   */
  action() {
    if (this.actionType === 'add') {
      this.actions[this.actionType]();
      return;
    }

    const id = this.getTodoId(this.btnEl);
    this.actions[this.actionType](id);
  }

  /**
   * 투두 추가
   */
  add() {
    const length = this.todos.length;

    this.todos.splice(length, 1, {
      id: this.todos.length + 1,
      content: this.content,
      done: false,
    });
  }

  /**
   * 투두 완료 토글
   * @param {string} id - 투두 아이디
   */
  toggle(id) {
    const clickedTodo = this.todos.find((todo) => todo.id === Number(id));
    clickedTodo.done = !clickedTodo.done;
  }

  /**
   * 투두 제거
   * @param {string} id - 투두 아이디
   */
  delete(id) {
    const idx = this.todos.findIndex((todo) => todo.id === Number(id));
    this.todos.splice(idx, 1);
  }

  /**
   * 클릭된 투두 아이디 반환
   * @param {HTMLElement} btnEl - 버튼 엘리먼트
   * @returns - 투두 아이디
   */
  getTodoId(btnEl) {
    const li = btnEl.closest('li');
    return li.dataset.id;
  }
}
