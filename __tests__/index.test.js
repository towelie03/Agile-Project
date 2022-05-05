import supertest from 'supertest';
import app from '../index.js';
import path from 'path';
const __dirname = path.resolve();

describe("GET /", () => {
	test("it should respond with the index.html page", async () => {
		const response = await request(app).get("/");
		expect (response.body).toBe(path.join(__dirname + "../templates/index.html"));
		expect(response.statusCode).toBe(200);
	})
})
