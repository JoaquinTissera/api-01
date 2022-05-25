const ObjectId = require("mongoose").Types.ObjectId;

const isValidId = (_id: string) => {
  if (!ObjectId.isValid(_id)) {
    throw new Error("Bad ID");
  }
};

module.exports = {
  isValidId,
};
