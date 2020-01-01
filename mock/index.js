const delay = require("mocker-api/utils/delay");
const noProxy = process.env.NO_PROXY === "true";

const proxy = {
  "GET /api/user/login": {
    id: 1,
    username: "kenny",
    sex: 6
  }
  // ...
};

module.exports = noProxy ? {} : delay(proxy, 1000);
