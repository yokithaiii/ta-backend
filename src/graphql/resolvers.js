const Donation = require('../models/Donation');

const resolvers = {
  Query: {
    donations: async (_, { streamerId }) => {
      return await Donation.findAll({ where: { streamerId } });
    }
  },
  Mutation: {
    createDonation: async (_, { amount, message, streamerId }) => {
      const donation = await Donation.create({ amount, message, streamerId });
      return donation;
    }
  }
};

module.exports = resolvers;
