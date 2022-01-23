const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
//const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');

//Load schema and resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

//Load db methods
const mongoDataMethods = require('./data/db.js');

//Connect MongoDB
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://root:shavker23@cluster0.zsezv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected!");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

async function startApolloServer(typeDefs, resolvers) {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });

    await server.start();

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {

        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    })
}

(async() => {
    await startApolloServer(typeDefs, resolvers);
})();