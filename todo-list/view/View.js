import { formatDate } from '../utils/dateUitls.js';

export default class View {
  constructor() {
    this.todoListEl = document.querySelector('.todo-list');
    this.dateEl = document.querySelector('.date-wrapper__full-date');
    this.contentWrapper = document.querySelector('.content-wrapper');
  }

  render(todos) {
    this.renderDate();

    const isEmpty = todos.length === 0;
    this.toggleEmptyState(isEmpty);

    this.todoListEl.innerHTML = this.generateTodoLiHtml(todos);
  }

  toggleEmptyState(isEmpty) {
    this.contentWrapper.classList.toggle('is-empty', isEmpty);
  }

  generateTodoLiHtml(todos) {
    if (todos.length === 0) return '';

    return todos
      .map(
        (todo) => `
              <li class="todo ${todo.done ? 'done' : ''}" data-id="${todo.id}">
                  <button type="button" class="icon-button todo__status-button" data-type="toggle">
                    <img src="./assets/${
                      todo.done ? 'done.svg' : 'todo.svg'
                    }" alt="todo-status-button" />
                  </button>
                  <p class="todo__content">${todo.content}</p>
                  <button type="button" class="icon-button todo__delete-button" data-type="delete">
                    <img src="./assets/delete.svg" alt="todo-delete-button" />
                  </button>
              </li>
              `
      )
      .join('');
  }

  renderDate() {
    const formattedDateString = formatDate();
    this.dateEl.textContent = formattedDateString;
  }
}
