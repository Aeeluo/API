const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

/*
* Crée la table Produit
*/

const Product = sequelize.define('Product', {
  productName: DataTypes.STRING,
  productDescription: DataTypes.STRING,
  productPrice: DataTypes.DOUBLE,
  productStock: DataTypes.INTEGER,
  productImage: DataTypes.STRING
}, {
  tableName: 'Product'
})

Product.sync();

sequelize.sync({logging: console.log});


module.exports = {
  sequelize:sequelize,
  product:Product
}
