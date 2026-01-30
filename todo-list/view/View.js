import { formatDate } from '../utils/dateUitls.js';

export default class View {
  constructor() {
    this.todoListEl = document.querySelector('.todo-list');
    this.dateEl = document.querySelector('.date-wrapper__full-date');
    this.contentWrapper = document.querySelector('.content-wrapper');
  }

  /**
   * 메인 컨텐츠 렌더링
   * @param {*} todos - 투두 리스트 배열
   */
  render(todos) {
    this.renderDate();

    const isEmpty = todos.length === 0;
    this.toggleEmptyState(isEmpty);

    this.todoListEl.innerHTML = this.generateTodoLiHtml(todos);
  }

  /**
   * 투두 리스트 비어있는 상태 토글
   * @param {*} isEmpty - 비어있는 상태 여부
   */
  toggleEmptyState(isEmpty) {
    this.contentWrapper.classList.toggle('is-empty', isEmpty);
  }

  /**
   * 투두 리스트 li HTML 생성
   * @param {*} todos - 투두 리스트 배열
   * @returns - 투두 리스트 li HTML 문자열
   */
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

  /**
   * 현재 날짜 렌더링
   */
  renderDate() {
    const formattedDateString = formatDate();
    this.dateEl.textContent = formattedDateString;
  }
}
