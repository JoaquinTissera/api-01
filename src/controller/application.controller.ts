import { Request, Response } from "express";
import { AnyFunction } from "../types";

const execution_method = async (
  req: Request,
  res: Response,
  callback: AnyFunction,
) => {
  try {
    if (req.body) {
      const { response, status = 200 } = await callback(req);
      console.log("RESPONSE", response, status);
      res.status(status).send(response);
      return { response, status };
    } else {
      throw new Error("Must specify body");
    }
  } catch (e: any) {
    res.status(500).send({
      error: e.tag ? e.error.message : e.message,
    });
    return {};
  }
};

const handled_method = (callback: AnyFunction) => {
  return async (req: Request, res: Response) => {
    execution_method(req, res, callback);
  };
};

module.exports = {
  handled_method,
};
