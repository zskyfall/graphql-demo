const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Post {
        id: ID,
        title: String,
        body: String,
        userId: String,
        user: User,
        comments: [Comment]
    }

    type User {
        id: ID,
        name: String,
        username: String,
        email: String,
        address: [String],
        phone: String,
        posts: [Post]
    }

    type Comment {
        id: ID,
        name: String,
        email: String,
        body: String,
        postId: String,
        post: Post
    }

    type Query {
        posts: [Post],
        post (id: ID!): Post,
        users: [User],
        user (id: ID!): User,
        comments: [Comment],
        comment(id: ID!): Comment
    }

    type Mutation {
        createUser(name: String, email: String, username: String): User,
        createPost(title: String, body: String, userId: String): Post,
        createComment(postId: String, name: String, email: String, body: String): Comment
    }
`

module.exports = typeDefs;

/* Here a simple schema is constructed without using the GraphQL query language. 
  e.g. using 'new GraphQLObjectType' to create an object type 
*/