module.exports = {
  addProductModel: addProductModel,
  removeProductModel: removeProductModel,
  showProductsModel: showProductsModel,
  modifyProductModel: modifyProductModel,
};

const { product } = require("../../bin/database");
const db = require("../../bin/database");


/*
*
* Ajoute un produit dans la base de données.
*
*/


async function addProductModel(
  name,
  description,
  price,
  stockQuantity,
  imageUrl
) {
  await db.product.create({
    productName: name,
    productDescription: description,
    productPrice: price,
    productStock: stockQuantity,
    productImage: imageUrl,
  });

  console.log(
    `Ajout à la DB : ${name} : ${description} / ${price}€ / ${stockQuantity} en stock / image : ${imageUrl} `
  );

  //   showProductsModel();
}

/*
*
* Enlève un produit de la base de données en prenant comme argument le nom du produit.
*
*/

async function removeProductModel(name) {
  await db.product.destroy({
    where: {
      productName: name,
    },
  });

  console.log("Produit supprimé.");

  //   showProductsModel();
}

/*
*
* Ajoute un produit dans la base de données.
*
*/
async function modifyProductModel(
  name,
  description,
  price,
  stockQuantity,
  imageUrl
) {

  /*
   * Tentative de garder les attributs à leur valeur initiale si les cases ne sont pas remplies sur la page HTML.
   */

        //   if(description = '' || description == null) description = db.product.findAll({attributes:['productDescription']}, {where: productName = name})
        // if(price = 0 || price == null) price = db.product.getDataValue('productPrice', {where: productName = name})
        // if(stockQuantity = 0 || stockQuantity == null) stockQuantity = db.product.getDataValue('productStock', {where: productName = name})
        // if(imageUrl = '' || imageUrl == null) imageUrl = db.product.getDataValue('productImage', {where: productName = name})


  await db.product
    .update(
      {
        productDescription: description,
        productPrice: price,
        productStock: stockQuantity,
        productImage: imageUrl,
      },
      { where: { productName: name } }
    )
    .then((product) => {
      console.log(product);
    });


    //   showProductsModel();
}

/*
*
* Affiche tous les produits de la BD.
*
*/

async function showProductsModel() {
    // Debugage
    db.product
      .findAll()
      .then((product) => {
        console.log(product);
      })
      .catch(function (e) {
        console.log(e);
      });
  }