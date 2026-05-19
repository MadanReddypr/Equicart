const { v4: uuidv4 } = require("uuid");

const processPaymentService = async (userId, amount) => {
  return {
    id: uuidv4(),
    userId,
    amount,
    status: "SUCCESS",
  };
};

module.exports = {
  processPaymentService,
};