import mongoose from 'mongoose';
import { MongoClient, ObjectId } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import client from '../config/db.js';
const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/users?retryWrites=true&w=majority";

/*this generates an unique objectid for every user. it allows multiple people to have the same username*/
const newObjectId = new ObjectId();

//this tests the connection to the db
describe('insert', () => {
  let connection;
  let db;

   beforeAll(async () => {
    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  // this inserts a random user into the db. 
  it('should insert a doc into collection', async () => {
    const users = db.collection('usernames');

    //assigns a mock user to have a objectid and a username
    const mockUser = {_id: newObjectId , uname: 'ligmanoots'};
    await users.insertOne(mockUser);

    //checks if inserted user is the same as the mock user
    const insertedUser = await users.findOne({ _id: newObjectId });
    expect(insertedUser).toEqual(mockUser);
  });
});
