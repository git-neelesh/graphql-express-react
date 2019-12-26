const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql')
if (process.NODE_ENV === 'development')
    var DB_PATH = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-hl4dh.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
else
    var DB_PATH = 'mongodb://localhost:27017/graphql_sample?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';

const mongoose = require('mongoose');

const schema = require('./schema');
const root = require('./resolvers')

const events = [];


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res, next) => res.send('Hello World!'))
mongoose.connect(DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Started")
        app.listen(3000);
    })
    .catch(err => {
        console.log("Error in connection", err)
    })