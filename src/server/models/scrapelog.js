'use strict';
module.exports = (sequelize, DataTypes) => {
  const ScrapeLog = sequelize.define('ScrapeLog', {
    scraper_type: DataTypes.STRING
  }, {});
  ScrapeLog.associate = function(models) {
    // associations can be defined here
  };
  ScrapeLog.ScraperTypes = {
    SHARE_THE_FACTS: "shareTheFacts",
  }
  return ScrapeLog;
};
