module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    // create a new product
    app.post("/products", products.create);
  
    // find all products
    app.get("/products", products.findAll);
  
    // find a single product by id
    app.get("/products/:productId", products.findOne);
  
    // Update a product by id
    app.put("/products/:productId", products.update);
  
    // create order after bought
    app.put("/products/bought/:productId", products.bought);

    // get top 5 best-seller products
    app.get("/top", products.findTop);

    //get sum of seller today
    app.get("/revenue", products.calRevenue);
  };