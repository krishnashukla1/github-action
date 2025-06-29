// test/app.test.js
const request = require("supertest");
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Krishna" }]);
});

test("GET /users returns JSON data", async () => {
  const res = await request(app).get("/users");
  expect(res.statusCode).toBe(200);
  expect(res.body[0].name).toBe("Krishna");
});
