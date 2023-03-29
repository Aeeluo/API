const controller = require('./../controllers/default');


module.exports = function(router) {
    const bodyParser = require('body-parser');

    router.get('/', controller.renderIndex);
    router.post('/', bodyParser.urlencoded({extended: false}), controller.addProductController.addProductController);
    router.post('/remove', bodyParser.urlencoded({extended:false}), controller.removeProductController.removeProductController);
    router.post('/modify',bodyParser.urlencoded({extended: false}), controller.modifyProduct.modifyProduct)

}