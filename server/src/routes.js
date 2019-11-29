import { Router } from "express";
import { TwilioAPI, CatFactsAPI } from "../api";

const { celebrate, Joi } = require("celebrate");
const routes = new Router();

const jsonRequestHandler = async (res, method) => {
  try {
    const data = await method();
    res.json({ status: "success", data });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

routes.get("/", (req, res) => {
  res.send("online");
});

routes.post(
  "/message/send",
  celebrate({
    body: Joi.object().keys({
      message: Joi.string()
        .min(1)
        .max(255)
        .required(),
      to: Joi.string()
        .min(11)
        .max(11)
        .required()
    })
  }),
  (req, res) =>
    jsonRequestHandler(res, async () => {
      const { message, to } = req.body;
      const sid = await TwilioAPI.sendMessage(message, to);
      return { sid };
    })
);

routes.get("/fact", (req, res) =>
  jsonRequestHandler(res, async () => {
    const fact = await CatFactsAPI.getFact();
    return { fact };
  })
);

export { routes };
