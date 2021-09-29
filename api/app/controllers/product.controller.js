const Product = require("../model/product.model.js");
const Orders = require("../model/order.model.js");

// create new product
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // create new product
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
    });

    // save to the database
    Product.create(product, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating new product."
            });
        else res.send(data);
    });
};


// find all products
exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while getting all products."
            });
        else res.send(data);
    });
};


// find a product by id
exports.findOne = (req, res) => {
    Product.findById(req.params.productId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Cannot found product with id ${req.params.productId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error finding product with id " + req.params.productId
                });
            }
        } 
        else res.send(data);
      });
};

// update a product info by id
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Product.updateById(req.params.productId, new Product(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.params.productId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating product with id " + req.params.productId
                });
            }
        } 
        else res.send(data);
        
    });
};



// create order after bought
exports.bought = (req, res) => {

      // create new order
    var today = new Date();
    var offset = today.getTimezoneOffset();
    today = new Date(today.getTime() - (offset*60*1000));
    const order = new Orders({
        date: today.toISOString().split('T')[0],
        productId: req.params.productId,
    });


    // save to the database
    Orders.createNewOrder(order, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating new order."
            });
        else res.send(data);
    });
};

// find top products
exports.findTop = (req, res) => {
    Product.getTop((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while getting top products."
            });
        else res.send(data);
    });
};

// find top products
exports.calRevenue = (req, res) => {
    Product.revenue((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while getting revenue."
            });
        else res.send(data);
    });
};