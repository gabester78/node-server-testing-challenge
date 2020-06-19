const supertest = require("supertest");
const server = require("./server.js");
const db = require("../data/db-Config.js");
const router = require("../router/namesRouter");

describe("server.js", () => {
  it("should user the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("return 200 status", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
  });
});

describe("POST /", () => {
  it("should return status code 201", async () => {
    const res = await supertest(server).post("/post").send({ name: "Gabe" });
    expect(res.status).toBe(201);
  });

  it("should have Gabe", async () => {
    const res = await supertest(server).post("/post").send({ name: "Gabe" });
    expect(res.body.name).toBe("Gabe");
  });
});

describe("DELETE /", () => {
  it("should delete id 1", async () => {
    const res = await supertest(server).delete("/1");
    expect(res.status).toBe(200);
  });

  it("should not find an id to delete", async () => {
    const res = await supertest(server).delete("/");
    expect(res.status).toBe(404);
  });
});
