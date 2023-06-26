import { API } from "../routes/api";
export class TodoListResource extends API {
  constructor(apiUrl) {
    super(apiUrl);
    this.resource = 'todo-list';
  }

  async getTodoList() {
    return this.get(this.resource);
  }

  async createTodoList(title, text) {
    const payload = { title, text };
    return this.post(this.resource, payload);
  }

  async updateTodoList(todoListId, title, text) {
    const payload = { title, text };
    return this.put(this.resource, todoListId, payload);
  }

  async deleteTodoList(todoListId) {
    return this.delete(this.resource, todoListId);
  }
}

