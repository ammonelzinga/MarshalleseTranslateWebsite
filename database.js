const {MongoClient} = require('mongodb'); 
const bcrypt = require('bcrypt'); 
const uuid = require('uuid'); 

const userName = process.env.MONGOUSER; 
const password = process.env.MONGOPASSWORD; 
const hostnmae = process.env.MONGOHOSTNAME; 

if (!userName) {
    throw Error('Database not configured. Set environment variables'); 
}

const url = `mongodb+srv://zingaboy:elzinga11@cluster0.syujyru.mongodb.net`;

const client = new MongoClient(url); 
const usercollection = client.db('startup').collection('user'); 
const scoreCollection = client.db('startup').collection('score'); 

function getUser(email) {
    return usercollection.findOne({email:email}); 
}

function getUserByToken(token) {
    return usercollection.findOne({token: token }); 
}

async function createUser(email, password) {
//    hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10); 

    const user = {
        email: email,  
        password: passwordHash, 
        token: uuid.v4(), 
    }; 
    await usercollection.insertOne(user); 

    return user; 
}

function addScore(score) {
    scoreCollection.insertOne(score); 
}

function getHighScores() {
    const query = {}; 
    const options = {
        sort: { score: -1 }, 
        limit: 10,
    }; 
    const cursor = scoreCollection.find(query, options); 
    return cursor.toArray(); 
}

module.exports = {
    getUser,
    getUserByToken, 
    createUser, 
    addScore, 
    getHighScores,
}; 