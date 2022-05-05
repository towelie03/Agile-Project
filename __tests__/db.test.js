import data_base from '../config/db.js';
import supertest from 'supertest';
import app from '../index.js';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

describe("test database connection", () => {
	it('testing connection', function done() {
		mongoose.connection.once("open", () => console.log('DB Connected')).on('error', (err) => {
			console.warn('Error: ', err)
		});

		beforeEach(function done() {
			mongoose.connection.collections.test.drop(() => {
				done();
			})
		});
	done();		
	});
});


