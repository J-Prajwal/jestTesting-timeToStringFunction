const timeToString = require("./timeToString");

describe("Test cases for converting time to string", () => {
  test("Getting only seconds as a result", () => {
    expect(timeToString(5200)).toBe("5 seconds");
  });
  test("Getting Singular minute as a result", () => {
    expect(timeToString(60000)).toBe("1 minute");
  });
  test("Getting Minutes as a result", () => {
    expect(timeToString(180000)).toBe("3 minutes");
  });
  test("Getting minutes and seconds as a result", () => {
    expect(timeToString(200000)).toBe("3 minutes 20 seconds");
  });
});
