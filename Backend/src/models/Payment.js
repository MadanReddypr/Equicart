class Payment {
  constructor(id, userId, amount, status) {
    this.id = id;
    this.userId = userId;
    this.amount = amount;
    this.status = status;
  }
}

module.exports = Payment;