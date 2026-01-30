import Todo from '../model/Todo.js';
import View from '../view/View.js';

export default class Controller {
  constructor() {
    this.todos = [];
    this.todoListEl = document.querySelector('.todo-list');
    this.init();
  }

  init() {
    View.render(this.todoListEl, this.todos); // 초기 렌더링
    this.todoListEl.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    const btnEl = e.target.closest('button');

    if (!btnEl) return;

    const actionType = btnEl.dataset.type;

    if (actionType) {
      new Todo(this.todos, btnEl, actionType);

      View.render(this.todoListEl, this.todos);
    }
  }
}
