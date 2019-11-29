enum ResponseStatus {
  Success = "success",
  Error = "error"
}

interface FactResponseData {
  fact: string;
}

interface SendMessageResponseData {
  sid: string;
}

interface Response {
  status: ResponseStatus;
  data: unknown;
}

class ServerAPI {
  static get(path: string): Promise<unknown> {
    return fetch(`${process.env.API_HOSTNAME}${path}`)
      .then(response => response.json())
      .then(({ data }: Response) => data)
      .catch(error => console.error(error));
  }

  static post(path: string, body = {}): Promise<unknown> {
    return fetch(`${process.env.API_HOSTNAME}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(({ data }: Response) => data)
      .catch(error => console.error(error));
  }

  static async sendMessage(
    message: string,
    to: string
  ): Promise<SendMessageResponseData> {
    const data: SendMessageResponseData = (await ServerAPI.post(
      "/message/send",
      {
        message,
        to
      }
    )) as SendMessageResponseData;
    return data;
  }

  static async getFact(): Promise<string> {
    const { fact }: FactResponseData = (await ServerAPI.get(
      "/fact"
    )) as FactResponseData;
    return fact;
  }
}

export { ServerAPI };
