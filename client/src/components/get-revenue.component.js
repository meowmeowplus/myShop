import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllRevenue } from "../actions/products";

class Revenue extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveRevenue = this.setActiveRevenue.bind(this);
    
    this.state = {
      currentRevenue: null,
    };
    console.log("props: " + JSON.stringify(this.props));
  }

  componentDidMount() {
    this.props.getAllRevenue();
    console.log("revenue: " + JSON.stringify(this.props));
  }


  refreshData() {
    this.setState({
      currentRevenue: null,
    });
  }

  setActiveRevenue(revenue) {
    this.setState({
      currentRevenue: revenue,
    });
  }


  render() {
    const { currentRevenue } = this.state;
    const { products } = this.props;
    // console.log("prop: " + JSON.stringify(this.props));
    return (
        <div className="list row">
            
            <div className="col-md-6">
            <h4>Revenues List</h4>

            <ul className="list-group">
                {products &&
                products.map((revenue) => (
                    <li
                    className={
                        "list-group-item "
                    }
                    onClick={() => this.setActiveRevenue(revenue)}
                    key={revenue.date}
                    >
                    {revenue.date}
                    </li>
                ))}
            </ul>
            </div>

            <div className="col-md-6">
            {currentRevenue ? (
                <div>
                <h4>Revenue</h4>
                <div>
                    <label>
                    <strong>Date:</strong>
                    </label>{" "}
                    {currentRevenue.date}
                </div>

                <div>
                    <label>
                    <strong>Number of sold items:</strong>
                    </label>{" "}
                    {currentRevenue.nums}
                </div>

                <div>
                    <label>
                    <strong>Total revenue:</strong>
                    </label>{" "}
                    {currentRevenue.revenue}
                </div>

               
            </div>
            ) : (
                <div>
                <br />
                <p>Click on the date you need to see that day's revenue...</p>
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

export default connect(mapStateToProps, { getAllRevenue })(Revenue);
