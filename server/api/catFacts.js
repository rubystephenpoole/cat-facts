import rp from "request-promise";

class CatFactsAPI {
  static host = "https://catfact.ninja";

  static get(path) {
    return rp({ uri: `${CatFactsAPI.host}${path}`, json: true });
  }

  static async getFact() {
    const { fact } = await CatFactsAPI.get("/fact");
    return fact;
  }
}

export { CatFactsAPI };
