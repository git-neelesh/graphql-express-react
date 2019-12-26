const Event = require('../models/event');
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const root = {
    hello: () => 'Hello world!',
    events: () => {
        return Event.find({})
            .catch(err => {
                console.log("Having some error while fetching", err);
                return err;
            })
            .then(events => {
                return events.map(event => {
                    return User.findById(event.creator)
                        .catch(err => {
                            return err
                        })
                        .then(user => {
                            return { ...event._doc, creator: user, password: null }
                        })
                })

            })
        // return events;
    },
    users: () => {
        return User.find().catch(err => {
            console.log("Having some error while fetching", err);
            return err;
        })
            .then(users => {
                return users.map(user => {
                    return { ...user._doc, _id: user.id, password: null }
                })

            })
    },
    createEvents: ({ eventInput }) => {
        let event = {
            userId: Math.random(),
            id: Math.random(),
            title: eventInput.title,
            completed: eventInput.completed,
            creator: "5e04f14dec733b4570acf6b4"
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
        return bcrypt.hash(userInput.password, 12).then(function (hash) {
            const user = new User({
                email: userInput.email,
                password: hash
            })
            return user.save().then(user => {
                console.log("data", user)
                return { ...user._doc, password: null };
            }).catch(err => {
                console.log(" Having some error while saving user", err);
                return err;
            })
        });


    }
};

module.exports = root;