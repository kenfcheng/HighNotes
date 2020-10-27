import React, { Component } from "react";

import Images from "../components/Images/image";
import Buttons from "../components/Images/button";
import { api } from "./config";
import "./App.css";

export default class MainPhotoComponent extends Component {
  state = {
    uploading: false,
    images: [],
  };

  onChange = (e) => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`${api}/image-upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((images) => {
        this.setState({
          uploading: false,
          images,
        });
      });
  };

  removeImage = (id) => {
    this.setState({
      images: this.state.images.filter((image) => image.public_id !== id),
    });
  };

  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons onChange={this.onChange} />;
      }
    };

    return (
      <div>
        <div className="buttons">{content()}</div>
      </div>
    );
  }
}
