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

            input PostInput {
                title: String!
                description: String!,
                author: String!
                date: String!
            }

            type RootQuery{
                posts: [Post!]!
            }

            type RootMutation {
                createPost(postInput: PostInput):Post
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
    `
);