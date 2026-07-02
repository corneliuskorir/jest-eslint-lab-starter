const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

describe("capitalizeWords", () => {
  it("Returns a string with each first word capitalized", () => {
    const toCaps = capitalizeWords("hello world");
    const expected = "Hello World";
    expect(toCaps).toBe(expected);
  });
  it("Capitalize single word string", () => {
    const toCaps = capitalizeWords("h");
    const expected = "H";
    expect(toCaps).toBe(expected);
  });
  it("Return empty string for empty string", () => {
    const toCaps = capitalizeWords("");
    const expected = "";
    expect(toCaps).toBe(expected);
  });
  it("Return first letter capitalized for each word if seperated by special characters", () => {
    const toCaps = capitalizeWords("hello-world");
    const expected = "Hello-World";
    expect(toCaps).toBe(expected);
  });
});

describe("filterActiveUsers", () => {
  it("Filters active users from array", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];
    const filtered = filterActiveUsers(users);
    const expected = [{ name: "Alice", isActive: true }];
    expect(filtered).toStrictEqual(expected);
  });
  it("Return empty array if all users are inactive", () => {
    const users = [
      { name: "Alice", isActive: false },
      { name: "Bob", isActive: false },
    ];
    const filtered = filterActiveUsers(users);
    const expected = [];
    expect(filtered).toStrictEqual(expected);
  });
  it("Return empty array if empty array given", () => {
    const users = [];
    const filtered = filterActiveUsers(users);
    const expected = [];
    expect(filtered).toStrictEqual(expected);
  });
});

describe("logAction", () => {
  it("Generates correct log string for valid inputs", () => {
    const timestamp = new Date().toISOString();
    const log = logAction("login", "Alice");
    const expected = `User Alice performed login at ${timestamp}`;
    expect(log).toBe(expected);
  });

  it("Generates correct log string for missing inputs inputs", () => {
    const timestamp = new Date().toISOString();
    const log1 = logAction("Alice");
    const log2 = logAction("login");
    const expected1 = `User undefined performed Alice at ${timestamp}`;
    const expected2 = `User undefined performed login at ${timestamp}`;
    expect(log1).toBe(expected1);
    expect(log2).toBe(expected2);
  });

  it("Empty strings for inputs", () => {
    const timestamp = new Date().toISOString();
    const log = logAction("", "");
    const expected = `User  performed  at ${timestamp}`;
    expect(log).toBe(expected);
  });
});
