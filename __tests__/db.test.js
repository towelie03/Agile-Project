import mongoose from 'mongoose';
import { MongoClient, ObjectId } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import client from '../config/db.js';
const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/users?retryWrites=true&w=majority";

const newObjectId = new ObjectId();

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

  it('should insert a doc into collection', async () => {
    const users = db.collection('usernames');

    const mockUser = {_id: newObjectId , name: 'ligmanoots'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: newObjectId });
    expect(insertedUser).toEqual(mockUser);
  });
});
