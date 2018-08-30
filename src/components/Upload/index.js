import React from 'react';
import { connect } from 'react-redux';
import 'components/Upload/Style.css';
import Auth from 'components/RequireAuth';
import * as action from 'action';

class Upload extends React.Component {
    constructor(props) {
      super(props);
      this.state = { imagePreviewUrl: ''};
    }
  
    handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      this.props.uploadPhoto(this.state.imagePreviewUrl);
      this.setState({ imagePreviewUrl: '' }, () => alert("Image uploaded successfully!"));
    }
  
    handleImageChange(e) {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        
        this.setState({
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    renderImagePreview = () => {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;

      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        imagePreview = (<div>Please select an Image for Preview</div>);
      }
      return imagePreview;
    }
  
    render() {
      return (
        <div className="container">
          <form className="fetchImages" onSubmit={(e)=>this.handleSubmit(e)}>
            <input 
              type="file" 
              onChange={(e)=>this.handleImageChange(e)} />
            <button type="submit" >Upload Image</button>
          </form>
          <div className="imgPreview">
            {this.renderImagePreview()}
          </div>
        </div>
      )
    }
  }
    
export default connect(null, action)(Auth(Upload));