import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrending} from "../redux/actions/trending-action";
import "../helpers/home.css";
import { Link } from "react-router-dom";

class Home extends Component {

  scrollEvent = async () => {

    if (
      window.pageYOffset ===
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      const offset = this.props.trending.length;
      await this.props.ongetTrending(
        offset,
        25,
        this.props.match.params.category
      );
    }
  };

  async componentDidMount() {
    const offset = this.props.trending.length;
    if (offset === 0) {
      await this.props.ongetTrending(
        offset,
        25,
        this.props.match.params.category
      );
    }
    window.addEventListener("scroll", this.scrollEvent,false);
  }
 
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent,false); 
  }
  render() {
    return (
      <div className="home-container">
        <div className="gifs">
    <h1 className="trending-header">#Trending</h1>
          {this.props.trending.length > 0
            ? this.props.trending.map((gif) => {
                return (
                  <div className="gif-container" key={gif.id}>
                    <div className="gif-body">
                      <Link to={`/detail/${gif.id}`}>
                      <img src={gif.images.downsized.url} alt="" />
                      </Link>
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
