const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Donation {
    id: ID!
    amount: Float!
    message: String
    streamerId: ID!
    createdAt: String!
  }

  type Query {
    donations(streamerId: ID!): [Donation]
  }

  type Mutation {
    createDonation(amount: Float!, message: String, streamerId: ID!): Donation
  }
`;

module.exports = typeDefs;
