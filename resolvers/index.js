const Event = require('../models/event');
const User = require('../models/user')
const root = {
    hello: () => 'Hello world!',
    events: () => {
        return Event.find({})
            .catch(err => {
                console.log("Having some error while fetching", err);
                return err;
            })
            .then(result => {
                return result.map(event => {
                    return User.findById(event.creator)
                        .catch(err => {
                            return err
                        })
                        .then(user => {
                            return { ...event, creator: user}
                        })
                })

            })
        // return events;
    },
    users: () => {
        return User.find({}).catch(err => {
            console.log("Having some error while fetching", err);
            return err;
        })
            .then(result => {
                return result;

            })
    },
    createEvents: ({ eventInput }) => {
        let event = {
            userId: Math.random(),
            id: Math.random(),
            title: eventInput.title,
            completed: eventInput.completed,
            creator: "5e034e1777c4f39a587734b3"
        }
        return (new Event(event)).save().then(data => {
            console.log("data", data)
            return { ...data._doc };
        }).catch(err => {
            console.log(" having some error", err);
            return err;
        })
        // events.push(event)
    },
    createUsers: ({ userInput }) => {
        const user = new User({
            email: userInput.email,
            password: userInput.password
        })
        return user.save().then(user => {
            console.log("data", user)
            return { ...user._doc, password: null };
        }).catch(err => {
            console.log(" Having some error while saving user", err);
            return err;
        })
    }
};

module.exports = root;