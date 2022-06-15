const { request} = require("@playwright/test");
const { BeforeAll, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(1000 * 1000);

BeforeAll(async function () {
  const context = await request.newContext({
    baseURL: "https://api.dropbox.com/2",
  });

  global.context = context;
});
