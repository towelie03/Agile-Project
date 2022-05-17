import supertest from 'supertest';
import app from '../index.js';
import path from 'path';
import {response} from 'express';
const request = supertest(app);
const __dirname = path.resolve();

describe("get endpoints for /", () => {
	it('ends GET request the / endpoint', async () => {
		const res = await request.get('/')
		expect(res.status).toBe(200)
	})	
})

describe("get endpoints for /about", () => {
	it('ends GET request the /about endpoint', async () => {
		const res = await request.get('/about')
		expect(res.status).toBe(200)
	})	
})

describe("get endpoints for /story", () => {
	it('ends GET request the /story endpoint', async () => {
		const res = await request.get('/story')
		expect(res.status).toBe(200)
	})	
})

describe("get endpoints for /login", () => {
	it('ends GET request the /login endpoint', async () => {
		const res = await request.get('/login')
		expect(res.status).toBe(200)
	})	
})

describe("get endpoints for /signup", () => {
	it('ends GET request the /signup endpoint', async () => {
		const res = await request.get('/signup')
		expect(res.status).toBe(200)
	})
})

describe("get endpoints for /timers", () => {
	it('ends GET request the /timers endpoint', async () => {
		const res = await request.get('/timers')
		expect(res.status).toBe(200)
	})	
})



