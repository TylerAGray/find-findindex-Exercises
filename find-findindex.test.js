// some-every.js

// Define a function to find a user by their username in an array of user objects
function findUserByUsername(users, username) {
  return users.find(user => user.username === username);
}

// Define a function to remove a user from an array of user objects by their username
function removeUser(users, username) {
  const index = users.findIndex(user => user.username === username);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return undefined;
}
// some-every.test.js

// Test cases for findUserByUsername
describe("#findUserByUsername", function() {
  let users;
  // Initialize users array before each test
  beforeEach(function() {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" }
    ];
  });
  // Test if the function returns the correct user object for a given username
  it("returns the object if the username matches the string passed", function() {
    expect(findUserByUsername(users, "akagen")).toEqual({ username: "akagen" });
  });
  // Test if the function returns undefined when the username is not found
  it("returns undefined if a username is not found", function() {
    expect(findUserByUsername(users, 'taco')).toEqual(undefined);
  });
});

// Test cases for removeUser
describe("#removeUser", function() {
  let users;
  // Initialize users array before each test
  beforeEach(function(){
      users = [
        { username: "mlewis" },
        { username: "akagen" },
        { username: "msmith" }
      ];
  })
  // Test if the function removes a user from the array
  it("removes a user from an array", function() {
    removeUser(users, "mlewis");
    expect(users.length).toEqual(2)
  });
  // Test if the function returns the removed user
  it("returns the removed user", function() {
    expect(removeUser(users,"mlewis")).toEqual({ username: "mlewis" });
  });
  // Test if the function returns undefined when the user is not found
  it("returns undefined if the user is not found in the array", function() {
    expect(removeUser(users, "taco")).toEqual(undefined);
    expect(users.length).toEqual(3);
  });
});
