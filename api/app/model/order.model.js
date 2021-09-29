const sql = require("./db.js");

//constructor
const Orders = function(order) {
    this.date = order.date;
    this.productId = order.productId;
};

//create new order
Orders.createNewOrder = (newOrder, result) => {
    sql.query("INSERT INTO Orders SET ?", newOrder, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        console.log("created order: ", { id: res.insertId, ...newOrder });
        result(null, { id: res.insertId, ...newOrder });
    });
};

module.exports = Orders;