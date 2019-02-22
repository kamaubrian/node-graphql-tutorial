const {buildSchema} = require('graphql');
// language=GraphQL Schema
module.exports = buildSchema(
        `
            type Post {
                _id: ID!
                title: String!
                description: String!
                author: String!
                date:String!
            }
    `
);