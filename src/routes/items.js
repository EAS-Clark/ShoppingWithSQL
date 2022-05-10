var items = require('../route_functions/items.js');

module.exports = function (app) {

  app.get('/api/items', async (req, res) => {

    console.log('hello');
    try {
      var getResponse = await items.get(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });

  app.post("/api/items", async (req, res) =>{

    try {
      var getResponse = await items.post(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });
  
  app.get('/api/items/:id', async (req, res) => {

    try {
      var getResponse = await items.getById(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });

  app.patch("/api/items/:id", async (req, res) =>{

    try {
      var getResponse = await items.post(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });

  app.delete("/api/items/:id", async (req, res) =>{

    try {
      var getResponse = await items.post(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });

}
