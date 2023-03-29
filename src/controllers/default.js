module.exports = {
    renderIndex : index,
    addProductController : require('./index'),
    removeProductController: require('./index'),
    showProducts: require('./index'),
    modifyProduct: require('./index')
}

/*
* Affiche la page HTML 'index'
*/

function index(req, res){
    res.render('index');
}