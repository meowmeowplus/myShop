const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.title = product.title;
  this.price = product.price;
  this.description = product.description;
  this.category = product.category;
  this.image = product.image;
};


//create new product
Product.create = (newProduct, result) => {
    sql.query("INSERT INTO Products SET ?", newProduct, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created product: ", { id: res.insertId, ...newProduct });
        result(null, { id: res.insertId, ...newProduct });
    });
};


// find a product by id
Product.findById = (productId, result) => {
    sql.query(`SELECT * FROM Products WHERE id = ${productId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found product: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found product with the id
        result({ kind: "not_found" }, null);
    });
};


//get all product
Product.getAll = result => {
    sql.query("SELECT * FROM Products", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("all products: ", res);
        result(null, res);
    });
};


// Change product info by id
Product.updateById = (id, product, result) => {
    sql.query(
        "UPDATE Products SET title = ?, price = ?, description = ?, category = ?, image = ? WHERE id = ?",
        [product.title, product.price, product.description, product.category, product.image, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found product with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated product: ", { id: id, ...product });
            result(null, { id: id, ...product });
        }
    );
};


//get top product
Product.getTop = result => {
    sql.query(" SELECT Products.*, COUNT(1) as nums \
                FROM Orders, Products \
                WHERE curdate() = Orders.date \
                AND Orders.productId = Products.id \
                GROUP BY productId \
                ORDER BY nums DESC \
                LIMIT 5", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("top products: ", res);
        result(null, res);
    });
};


Product.revenue = result => {
    sql.query(" SELECT O.date as date, COUNT(1) as nums, SUM(P.price) as revenue \
                FROM Orders as O, Products as P \
                WHERE O.productId = P.id \
                GROUP BY O.date \
                ORDER BY O.date DESC", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("revenue : ", res);
        result(null, res);
    });
};


module.exports = Product;
