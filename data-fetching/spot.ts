//spot is a module that is a light wrapper around the fetch api

class Spot {
  baseURL = '';

  setBaseURL = (baseURL: string) => {
    this.baseURL = baseURL;
  };

  async request(method: 'GET' | 'PUT' | 'POST', path: string, body?: any) {
    let url = new URL(path, this.baseURL);

    return fetch(url.toString(), {
      method: method,
      credentials: 'include',
      body: body
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return response.json();
    });
  }

  async get(path: string) {
    return this.request('GET', path);
  }

  async put(path: string, body?: any) {
    return this.request('PUT', path, body);
  }

  async post(path: string, body?: any) {
    return this.request('POST', path, body);
  }
}

const s = new Spot();

export default s;
