import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGifsByCategory } from "../redux/actions/gifs-by-category-action";

class Category extends Component {
  scrollEvent = async () => {
    if (
      window.pageYOffset ===
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      const offset = this.props.gifsByCategory.length;
      await this.props.ongetGifsByCategory(
        offset,
        25,
        this.props.match.params.category
      );
    }
  };

  async componentDidMount() {
    const offset = this.props.gifsByCategory.length;
    if (offset === 0) {
      await this.props.ongetGifsByCategory(
        offset,
        25,
        this.props.match.params.category
      );
    }
    window.addEventListener("scroll", this.scrollEvent);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category) {
      await this.props.ongetGifsByCategory(
        0,
        25,
        this.props.match.params.category
      );
      window.scrollTo(0, 0);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent);
  }

  render() {
    return (
      <div className="home-container">
        <div className="gifs">
          <h1 className="trending-header">
            #{this.props.match.params.category}
          </h1>
          {this.props.gifsByCategory.length > 0
            ? this.props.gifsByCategory.map((gif) => {
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
  return { gifsByCategory: state.gifsByCategory };
};

const mapDispatchToProps = {
  ongetGifsByCategory: getGifsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
