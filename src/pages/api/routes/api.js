export class API {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async get(resource) {
    const response = await fetch(`${this.apiUrl}/${resource}`);
    const data = await response.json();
    return data;
  }

  async post(resource, payload) {
    const response = await fetch(`${this.apiUrl}/${resource}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  }

  async put(resource, resourceId, payload) {
    const response = await fetch(`${this.apiUrl}/${resource}/${resourceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  }

  async delete(resource, resourceId) {
    const response = await fetch(`${this.apiUrl}/${resource}/${resourceId}`, {
      method: 'DELETE',
    });
    return response.ok;
  }
}
