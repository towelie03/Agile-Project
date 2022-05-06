import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import userModel from '../models/userModel.js';

let connection = MongoClient;
let mongoServer = MongoMemoryServer;



describe("testing mongodb", () =>{
    describe("checks connection to database", () => {
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
    });
});


