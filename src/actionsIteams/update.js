const { update } = require('../controllers/iteam.controller');

module.exports = async function (params, body, resolve, reject) {

    // (id, name)
    let name = body.name;
    let category_id = body.category_id;
    let price = body.price;
    let image_url = body.image_url;
    

    try {
        let row = await update(params, name, category_id, price, image_url);
        resolve({ "response": 'rows edited: ' + row.changedRows });

    } catch {reject({ "response": 'uploaded failed:'});}
    
}

