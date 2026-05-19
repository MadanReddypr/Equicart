const {
  dashboardService,
  analyticsService,
  userStatsService,
} = require("../services/adminService");

exports.dashboard = async (req, res) => {
  try {
    const data = await dashboardService();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.analytics = async (req, res) => {
  try {
    const data = await analyticsService();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.userStats = async (req, res) => {
  try {
    const data = await userStatsService();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};