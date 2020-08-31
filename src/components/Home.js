import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrending } from "../redux/actions/trending-action";
import "../helpers/home.css";

class Home extends Component {
  async componentDidMount() {
    await this.props.ongetTrending(0, 20);
  }

  render() {
    console.log(this.props.trending);
    return (
      <div className="home-container">

        <div className="gifs">
        <h1 className="trending-header">#Trending</h1>
          {this.props.trending.length > 0
            ? this.props.trending.map((gif) => {
                return (
                  <div className="gif-container" key={gif.id}>
                      <div className="gif-body">
                      <img src={gif.images.downsized.url} alt=""/>
                    <p className="gif-title">{gif.title}</p>
                      </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trending: state.trending };
};

const mapDispatchToProps = {
  ongetTrending: getTrending,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
