const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

// This variable would be used to hold the response obtained.
// Hence it is declared here
let response;

When(
  "the user sends a request to dropbox with query {string}",
  async function (queryParam) {
    // making a get request with query params and storing the response
    response = await context.post("/check/user", {
      headers: {
        Authorization:
          "Bearer sl.BJkBafGzGFkzkUqeh5yqA2zmDpiNfDOmU9J70uhIbohF2QD2_yePWX1MFHGCsf9nFMbGi4pXwZ2aCMdW68usfaG2d_bV3qftNWINpeYSca9crNdjimtFSkRTU8EoYbykE6s_cweu",
        "Content-Type": "application/json",
      },
      data: {
        query: "foo",
      },
    });
  }
);

Then("the response code should be {string}", async function (statusCode) {
  // check whether the status code of the response and the desired status code are same
  assert.equal(
    response.status(),
    statusCode,
    `Expected status code ${statusCode}, but found ${response.status()}`
  );
});

Then(
  "the response body should contain the result {string}",
  async function (resultValue) {
    const obtainedResult = await response.json().result;

    // checking that the response has the result foo
    assert.equal(
      obtainedResult,
      countryId,
      `Expected Response ${resultValue} but found ${obtainedResult}`
    );

    console.log(obtainedResult, resultValue);
  }
);
