import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import User from '../models/userModel.js';

let connection = MongoClient;
let mongoServer = MongoMemoryServer;



//describe("checks connection to database", () => {
    it("connects to database succesfully", (done) => {
        mongoose.connection
            .once("open", () => console.log("Connected"))
            .on("error", (err) => {
                console.warn("Error: ", err)
            });

            beforeEach((done) => {
                mongoose.connection.collections.tester.drop(() => {
                    done();
                });
            });
    done();
    });
//});


describe('saving stuff to the db', () => {
	it('saving a user to the db', () => {
		const res = await request.post('/signup')
			.send({
				username: 'TomLane',
				password: 'password'
			})
		done()
	});
});

//describe('cleaning up the db after each test', () => {
//	it('cleans up db', () => {
		afterEach(async () => {
			await User.deleteMany()
		})
//	});
//});


