import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrending } from "../redux/actions/trending-action";

class Home extends Component {
  componentDidMount() {
    this.props.ongetTrending(0,20);
  }

  render() {
    return <div>Trending</div>;
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
};

const mapDispatchToProps = {
  ongetTrending: getTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
