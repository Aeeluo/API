module.exports = {
    addProductController:addProductController,
    removeProductController: removeProductController,
    modifyProduct: modifyProduct
}

const model = require('../models/default');


/*
*
* Récupère les inputs et appelle la fonction addProduct du modèle pour ajouter un produit dans la BD.
*
*/

function addProductController(req, res) {
    let name = req.body.productName
    let description = req.body.productDescription
    let price = req.body.productPrice
    let stockQuantity = req.body.productStockQuantity
    let imageUrl = req.body.productImageUrl

    model.addProductModel.addProductModel(name, description, price, stockQuantity, imageUrl);

    console.log(`Controller : ${name} / ${description} / ${price} € / ${stockQuantity} / ${imageUrl}`);

    res.status(200).redirect('/');
}

/*
*
* Récupère l'input du remove et appelle la fonction removeProduct du modèle pour enlever un produit de la BD.
*
*/
function removeProductController(req, res) {
    let name = req.body.productName

    model.removeProductModel.removeProductModel(name);

    res.status(200).redirect('/');
}


/*
*
* Récupère les inputs et appelle la fonction modifyProduct du modèle pour modifier un produit dans la BD.
*
*/
function modifyProduct(req, res){
    let name = req.body.productName
    let description = req.body.productDescription
    let price = req.body.productPrice
    let stockQuantity = req.body.productStockQuantity
    let imageUrl = req.body.productImageUrl

    model.modifyProductModel.modifyProductModel(name, description, price, stockQuantity, imageUrl);

    res.status(200).redirect('/');
}