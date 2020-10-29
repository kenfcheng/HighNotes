import React, {Component} from "react";
import axios from "axios";

class ProfilePhoto extends Component {
 
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
  },

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
axios.post('', fd.then(res => {
  console.log(res);
}));
},

render() {
  return (
    <div className="ProfilePhoto">
    <input style-{{display: 'none'}} type="file" onChange={this.fileSelectedHandler}></input>
      <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button>
    </div>
  )
}


  }
 


