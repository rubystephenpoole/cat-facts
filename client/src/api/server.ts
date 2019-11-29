class ServerAPI {
  static get(path) {
    return fetch(`${process.env.API_HOSTNAME}${path}`)
      .then(response => response.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  }

  static post(path, body = {}) {
    return fetch(`${process.env.API_HOSTNAME}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }) => data)
      .catch(error => console.error(error));
  }

  static sendMessage(message, to) {
    return ServerAPI.post("/message/send", { message, to });
  }

  static async getFact() {
    const { fact } = await ServerAPI.get("/fact");
    return fact;
  }
}

export { ServerAPI };
