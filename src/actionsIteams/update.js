const { update } = require('../controllers/iteam.controller');

module.exports = async function (params, body, resolve, reject) {

        // (id, name)
        let name = body.name;
        let category_id = body.category_id;
        let price = body.price;
        let image_url = body.image_url;
    
        //let name = req.body.name;
        console.log('name: ' + name);
        console.log('category_id: ' + category_id);
        console.log('price: ' + price);
        console.log('image_url: ' + image_url);

    let row = await update(params);


    resolve({"response": row});

}

const { create } = require('../controllers/iteam.controller');

module.exports = async function (body, resolve, reject) {

    // (id, name)
    let name = body.name;
    let category_id = body.category_id;
    let price = body.price;
    let image_url = body.image_url;

    //let name = req.body.name;
    console.log('name: ' + name);
    console.log('category_id: ' + category_id);
    console.log('price: ' + price);
    console.log('image_url: ' + image_url);

    try {
        let row = await create(name, category_id, price, image_url);
        console.log(row)
        resolve({ "response": 'uploaded id:' + row.insertId });
    } catch {


    }

}  