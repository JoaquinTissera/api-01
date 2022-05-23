import User from "../models/UserModel";
import {Request} from "express";

export const create = async (req: Request) => {

  const response = await new User(req.body).save(); 

  return response
}
