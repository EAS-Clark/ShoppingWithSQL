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

/*
test data

{
	"name": "test",
	"category_id": 1,
	"price": 2.54,
	"image_url": "/test/test.png"
}

*/