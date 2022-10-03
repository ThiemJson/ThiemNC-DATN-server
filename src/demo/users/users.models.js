const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("data.json");
const db = lowdb(adapter);

const TABLENAME = "users";

const getUser = async (username) => {
  try {
    const data = await db.get(TABLENAME).find({ username: username }).value();
    return data;
  } catch {
    return null;
  }
};

const createUser = async (user) => {
  try {
    await db.get(TABLENAME).push(user).write();
    return true;
  } catch {
    return false;
  }
};

export default {
  getUser,
  createUser,
};
