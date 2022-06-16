const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

// This variable would be used to hold the response obtained.
// Hence it is declared here
let response;

When(
  "the user sends a request to dropbox with query {string}",
  async function (queryParam) {
    // making a get request with query params and storing the response
    response = await POST("/2/check/user", {
      query: "foo",
    });
  }
);

Then("the response code should be {string}", async function (statusCode) {
  // check whether the status code of the response and the desired status code are same
  assert.equal(
    response.status,
    statusCode,
    `Expected status code ${statusCode}, but found ${response.status}`
  );
});

Then(
  "the response body should contain the result {string}",
  async function (resultValue) {
    const obtainedResult = await response.data.result;
    assert.equal(obtainedResult, resultValue, `Expected Result: ${resultValue} but obtained result ${obtainedResult}`)
  }
);
