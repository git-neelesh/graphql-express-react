const { buildSchema } = require('graphql');
var schema = buildSchema(`
    type Event {
        _id: String!
        userId: String
        id: String!
        title: String
        completed: Boolean
        creator: User
    }
    type User {
        _id: String!
        email: String!
        password: String
        createdEvents: [Event!]!
    }
    input EventInput {
        title: String
        id: String
        userId: String
        completed: Boolean
    }
    input UserInput {
        email: String!                
        password: String!
    }
    type Mutation {
        createEvents(eventInput: EventInput): Event
        createUsers(userInput: UserInput): User  
    }
    type Query {
        events: [Event!]!
        users: [User!]!
        hello: String
    }
    
`);
module.exports = schema;