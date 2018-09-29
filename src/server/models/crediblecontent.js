module.exports = (sequelize, DataTypes) => {
  const CredibleContent = sequelize.define('CredibleContent', {
    base_url: DataTypes.STRING,
    title: DataTypes.TEXT,
    author: DataTypes.STRING,
    publication: DataTypes.STRING,
    body: DataTypes.TEXT,
    scrape_status: DataTypes.STRING,
  }, {})
  CredibleContent.associate = function () {
    // associations can be defined here
  }
  CredibleContent.ScrapeStatuses = {
    PENDING: "pending",
    PROCESSING: "processing",
    FINISHED: "finished",
    ERROR: "error"
  }
  return CredibleContent
}
