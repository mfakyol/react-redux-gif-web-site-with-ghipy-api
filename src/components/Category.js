import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getGifsByCategory} from '../redux/actions/gifs-by-category-action'

class Category extends Component {
    componentDidMount(){
        this.props.ongetGifsByCategory(0,25,(this.props.match.params.category))
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.category !== prevProps.match.params.category){
         this.props.ongetGifsByCategory(0,25,(this.props.match.params.category))
        }
    }


  render() {
    return (
      <div className="home-container">
        <div className="gifs">
    <h1 className="trending-header">#{this.props.match.params.category}</h1>
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
  