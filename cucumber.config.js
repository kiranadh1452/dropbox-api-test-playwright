require("dotenv").config();
const axios = require("axios");
const { BeforeAll, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(1000 * 1000);

BeforeAll(async function () {
  // creating authorization head
  axios.defaults.headers.common = {
    Authorization: `Bearer ${process.env.TOKEN}`,
  };

  // creating base URL
  axios.defaults.baseURL = "https://api.dropbox.com";

  global.POST = axios.post;
  global.GET = axios.get;
});
