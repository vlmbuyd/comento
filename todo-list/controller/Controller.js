import Todo from '../model/Todo.js';
import View from '../view/View.js';

export default class Controller {
  constructor() {
    this.todos = [];
    this.todoListEl = document.querySelector('.todo-list');
    this.addBtnEl = document.querySelector('.todo__add-button');
    this.inputEl = document.querySelector('.todo__input');
    this.formEl = document.querySelector('.todo__form');
    this.view = new View();
  }

  /**
   * 초기 렌더링 및 이벤트 핸들러 등록
   */
  init() {
    this.view.render(this.todos); // 초기 렌더링
    this.todoListEl.addEventListener('click', (e) => this.handleClickCard(e));
    this.addBtnEl.addEventListener('click', (e) => this.handleClickAddBtn(e));
    this.formEl.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  /**
   * 투두 카드 클릭 핸들러
   */
  handleClickCard(e) {
    const btnEl = e.target.closest('button');

    if (!btnEl) return;

    const actionType = btnEl.dataset.type;

    if (actionType) {
      new Todo(this.todos, btnEl, actionType);

      this.view.render(this.todos);
    }
  }

  /**
   * 투두 추가 버튼 클릭 핸들러
   */
  handleClickAddBtn(e) {
    const form = this.addBtnEl.closest('form');

    // 인풋 폼이 열려있는 경우
    if (form.classList.contains('open') && this.inputEl.value.trim()) return;

    // 인풋 폼이 닫혀있는 경우
    e.preventDefault();
    form.classList.toggle('open');
    this.inputEl.focus();
  }

  /**
   * 투두 추가 폼 제출 핸들러
   */
  handleSubmit(e) {
    e.preventDefault();

    const content = this.inputEl.value.trim();
    if (!content) return;

    new Todo(this.todos, null, 'add', content);

    this.formEl.classList.toggle('open');
    this.inputEl.value = '';

    this.view.render(this.todos);
  }
}
