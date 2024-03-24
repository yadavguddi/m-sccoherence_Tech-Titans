const mongoose = require("mongoose");
const initData = require("./logindata.js");
const logindata = require("../models/login.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/logindata";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await logindata.deleteMany({});
  await logindata.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();