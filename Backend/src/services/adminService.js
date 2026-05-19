const dashboardService = async () => {
  return {
    totalUsers: 120,
    totalOrders: 340,
    totalRevenue: 250000,
  };
};

const analyticsService = async () => {
  return {
    monthlySales: 45000,
    activeUsers: 75,
  };
};

const userStatsService = async () => {
  return {
    newUsers: 20,
    premiumUsers: 10,
  };
};

module.exports = {
  dashboardService,
  analyticsService,
  userStatsService,
};