var categories = require('../route_functions/categories.js');

module.exports = function (app) {

  app.get('/api/categories', async (req, res) => {

    try {
      var getResponse = await categories.get(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });

  app.post("/api/categories", async (req, res) =>{

    try {
      var getResponse = await categories.post(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });
  
  app.patch("/api/categories", async (req, res) =>{

    try {
      var getResponse = await categories.post(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });

  app.delete("/api/categories", async (req, res) =>{

    try {
      var getResponse = await categories.post(req);
      res.json(getResponse)

    } catch (err) {
      res.json(err);
    }
  });


}
