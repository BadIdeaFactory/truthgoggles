module.exports = (sequelize, DataTypes) => {
  const CredibleContent = sequelize.define('CredibleContent', {
    base_url: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publication: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {})
  CredibleContent.associate = function () {
    // associations can be defined here
  }
  return CredibleContent
}
