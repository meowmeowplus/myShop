import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProduct } from "../actions/products";
import ProductDataService from "../services/product.service";

class Product extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.getProduct = this.getProduct.bind(this);
    // this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);

    this.state = {
      currentProduct: {
        id: null,
        title: "",
        price: null,
        description: "",
        category: "",
        image: "",
    
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          title: title,
        },
      };
    });
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState((prevState) => ({
      currentProduct: {
        ...prevState.currentProduct,
        price: price,
      },
    }));
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentProduct: {
        ...prevState.currentProduct,
        description: description,
      },
    }));
  }

  onChangeCategory(e) {
    const category = e.target.value;

    this.setState((prevState) => ({
      currentProduct: {
        ...prevState.currentProduct,
        category: category,
      },
    }));
  }

  onChangeImage(e) {
    const image = e.target.value;

    this.setState((prevState) => ({
      currentProduct: {
        ...prevState.currentProduct,
        image: image,
      },
    }));
  }


  getProduct(id) {
    ProductDataService.get(id)
      .then((response) => {
        this.setState({
          currentProduct: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  
  updateContent() {
    this.props
      .updateProduct(this.state.currentProduct.id, this.state.currentProduct)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ message: "The product was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentProduct } = this.state;

    return (
        <div>
            {currentProduct ? (
            <div className="edit-form">
                <h4>Product</h4>
                <form>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentProduct.title}
                    onChange={this.onChangeTitle}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={currentProduct.price}
                    onChange={this.onChangePrice}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentProduct.description}
                    onChange={this.onChangeDescription}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={currentProduct.category}
                    onChange={this.onChangeCategory}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                    type="text"
                    className="form-control"
                    id="image"
                    value={currentProduct.image}
                    onChange={this.onChangeImage}
                    />
                </div>

                </form>


                <button
                type="submit"
                className="badge badge-success"
                onClick={this.updateContent}
                >
                Update
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
    );
  }
}

export default connect(null, { updateProduct })(Product);
