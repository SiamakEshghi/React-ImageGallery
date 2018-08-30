import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';
import 'components/Album/Style.css';
import * as action from 'action';

const loadingGif = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif';

class Album extends Component {
    state = {
        loaded: false,
        query: '',
        opt: 'all'
    }
    componentDidMount() {
        const { imageList } = this.props;
        if(imageList.length === 0){
            this.props.setImageList(this.state.query,() => {
                this.setState({ loaded: true });
            })
        }else {
            this.setState({ loaded: true });
        }
    }

   
    handleSearchRequest = event => {
        event.preventDefault();
        this.setState({ loaded: false}, () => {
            this.props.setImageList(this.state.query,() => {
                this.setState({ loaded: true, query: '' });
            });
        });
    }
    handleSelect = (event) => {
        const opt = event.target.value;
        this.setState({ opt })
    }
    handleChange = (event) => {
        const query = event.target.value;
        this.setState({ query })
    }
    openImage = (img) => {
        if(!img.myPhoto) {
            window.open(img.largeImageURL);
        } else {
            alert("Uploaded images are visible only in small size!")
        }
    }
    getFinalImageList = () => {
        const { opt } = this.state;
        const { imageList } = this.props;
        switch(opt) {
            case 'all':
                return imageList;
            case 'online':
                return imageList.filter((image) => !image.myPhoto);
            case 'upload':
                return imageList.filter((image) => image.myPhoto);
            default: return imageList;
        }
    }
    renderImages = () => {
        return (
            <div className="albumContainer">
                {this.getFinalImageList().map((image) => {
                    return (
                        <div key={image.id} >
                            <img 
                                onClick={() => this.openImage(image)} 
                                src={image.largeImageURL}
                            />
                        </div>
                    );
                })}
            </div>
        );   
    }
    renderLoading = () => {
        return <div className="loadingContainer"><img src={loadingGif}/></div>
    }
    render(){
        const { loaded, query } = this.state;
        return(
            <div>
                <div className="secOne">
                    <form 
                      className="searchForm" 
                      onSubmit={this.handleSearchRequest}
                    >
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Search.." 
                            name="search"
                            value={query} 
                            onChange={this.handleChange}
                        />
                        <button 
                         type="submit" 
                         className="searchBtn" 
                        >
                            <Ionicon icon="md-search"  color="gray" />
                        </button>
                    </form>
                    <select className="select" onChange={this.handleSelect} defaultValue="all">
                        <option value="all">-- Filter --</option>
                        <option value="online">Pixabay Images</option>
                        <option value="upload">Uploaded Images</option>
                    </select>
                </div>
               {loaded  ?  <div>
                                <h2>Images</h2>
                                {this.renderImages()}
                            </div>
                        : this.renderLoading()
                }
            </div>
        );
    }
}
const mapStateToProps = ({ img }) => {
    return { 
        imageList: img.imageList
    }
}
Album.propTypes = { imageList: PropTypes.array.isRequired };
export default connect(mapStateToProps, action)(Album);