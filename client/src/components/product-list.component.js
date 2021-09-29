import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveProducts, buyProductById } from "../actions/products";
import { Link } from "react-router-dom";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.buyProduct = this.buyProduct.bind(this);
    this.state = {
      currentProduct: null,
      currentIndex: -1,
      message: "",
    };
  }

  componentDidMount() {
    this.props.retrieveProducts();
  }


  refreshData() {
    this.setState({
      currentProduct: null,
      currentIndex: -1,
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index,
    });
  }


  buyProduct() {
    this.props.buyProductById(Number(this.state.currentIndex + 1));
    console.log("cur index: " + Number(this.state.currentIndex + 1));
    this.setState({ message: "Bought successfully!" });
    //  this.refreshData();
  }

  render() {
    const { currentProduct, currentIndex } = this.state;
    const { products } = this.props;

    return (
        <div className="list row">
            
            <div className="col-md-6">
            <h4>Products List</h4>

            <ul className="list-group">
                {products &&
                products.map((product, index) => (
                    <li
                    className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveProduct(product, index)}
                    key={index}
                    >
                    {product.title}
                    </li>
                ))}
            </ul>
            </div>

            <div className="col-md-6">
            {currentProduct ? (
                <div>
                <h4>Product</h4>
                <div>
                    <label>
                    <strong>Title:</strong>
                    </label>{" "}
                    {currentProduct.title}
                </div>

                <div>
                    <label>
                    <strong>Price:</strong>
                    </label>{" "}
                    {currentProduct.price}
                </div>

                <div>
                    <label>
                    <strong>Description:</strong>
                    </label>{" "}
                    {currentProduct.description}
                </div>

                <div>
                    <label>
                    <strong>Category:</strong>
                    </label>{" "}
                    {currentProduct.category}
                </div>

                <div>
                    <label>
                    <strong>Image:</strong>
                    </label>{" "}
                    {currentProduct.image}
                </div>


                <Link
                    to={"/products/" + currentProduct.id}
                    className="badge badge-warning"
                >
                    Edit
                </Link>

                <button
                type="submit"
                className="badge badge-success"
                onClick={this.buyProduct}
                >
                Buy
                </button>
                <p>{this.state.message}</p>
                </div>
            ) : (
                <div>
                <br />
                <p>Click on the product you need...</p>
                </div>
            )}
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { retrieveProducts, buyProductById })(ProductsList);
