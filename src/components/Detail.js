import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getDetail, clearDetail} from '../redux/actions/detail-action'
import '../helpers/detail.css'

 class Detail extends Component {
    componentDidMount(){
        this.props.onGetDetail(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.onClearDetail();
    }

    state = {
        isPlaying: true
    }

     togglePlay(e) {
        if(this.state.isPlaying){
            e.target.parentNode.children[0].src = this.props.detail.images['480w_still'].url;
            e.target.parentNode.children[1].style.display = 'flex';
            this.setState({
                isPlaying: false
            })
        }
        else {
            e.target.parentNode.children[0].src = this.props.detail.images.original.url;
            e.target.parentNode.children[1].style.display = 'none';
            this.setState({
                isPlaying: true
            })
        }
    }

    render() {
        const {detail} = this.props;
        return (
          <div className="detail-page">
           {Object.keys(detail).length > 0 ?
              <div className="detail-container clearfix">
           <div className="gif-detail-container"  onClick={ this.togglePlay.bind(this)}>
               <img src={detail.images.original.url} alt=""/>
               <div className="overlay">Play</div>
       </div> 
       <div className="detail">
           <h2 className="detail-header">{detail.title}</h2>
           <h3>{`Size: ${(detail.images.original.size /1024 /1024).toFixed(2)} MB`}</h3>
           <h4>{`Import Date: ${detail.import_datetime}`}</h4>
           <h4>{`Resolution: ${detail.images.original.width+'x'+detail.images.original.height}`}</h4>
       </div>
       </div>: null}
       </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { detail: state.detail };
  };
  
  const mapDispatchToProps = {
    onGetDetail: getDetail,
    onClearDetail: clearDetail,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Detail)