This project is sample app for graphql with express. Later will add react app will use the graphql API.

## Prerequisite
Please create account in mongo db if you do not have local setup of mongo db its free sevice. 
After loggedin you can add your IP from Security -> Network access. 

Or you can also download mongo db and setup locally.

Mongo DB credential need to update in nodemon.json

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm install -g nodemon`
### `nodemon app.js`

Or

### `nodemon app.js --config local.config.json`


Server will be accesible on http://localhost:3000/ and graphql ui will be  http://localhost:3000/graphql

Simple Query:
### 
` 
query {
  events {
    title
    creator {
      email
    }
  }
}
`

![graphql](https://user-images.githubusercontent.com/1026717/71485442-05922e80-2837-11ea-9843-5ef8ac5331a8.png)



