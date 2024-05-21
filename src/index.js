const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const sequelize = require('./config/database');
const Donation = require('./models/Donation');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, async () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync({ force: true });
      console.log('Database synchronized.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
});
