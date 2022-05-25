import User from "../models/UserModel";
import { Request } from "express";
const { isValidId } = require("../helper/global.helper");

const create = async (req: Request) => {
  const response = await new User(req.body).save();

  return { response };
};

const findAll = async () => {
  const response = await User.find();

  return { response };
};

const findById = async (req: Request) => {
  isValidId(req.params.id);
  const response = await User.findById(req.params.id);

  return { response };
};

const update = async (req: Request) => {
  isValidId(req.params.id);
  const response = await User.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  });

  return { response };
};

const remove = async (req: Request) => {
  isValidId(req.params.id);
  const response = await User.findOneAndDelete(req.params.id as String);

  return { response };
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
};
