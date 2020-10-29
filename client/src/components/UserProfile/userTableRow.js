import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { CustomPlaceholder } from "react-placeholder-image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import UpdateUser from "../UserProfile/updateUserProfile";
import axios from "axios";
// import { titles } from "../../style/profile.css";

export default class UserTablerow extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }
  deleteUser() {
    axios
      .delete("/api/userprofile" + this.props._id)
      .then((res) => {
        console.log("User deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container center-row">
        <CustomPlaceholder
          width={400}
          height={400}
          className="margin-right-30 float-left-20"
        />
        <ul>
          <Card.Title>
            Username:
            <a>{this.props.username}</a>
          </Card.Title>
        </ul>
        <Card.Title>
          City:
          <a>{this.props.city}</a>
        </Card.Title>
        <Card.Title>
          State:
          <a>{this.props.state}</a>
        </Card.Title>
        <Card.Title>
          Country:
          <a>{this.props.country}</a>
        </Card.Title>
        <Card.Title>
          About Me:
          <a>{this.props.aboutMe}</a>
        </Card.Title>
        <Card.Title>
          Favorite Song(s):
          <a>{this.props.faveSong}</a>
        </Card.Title>
        <Button>
          Edit
          <Link
            className="edit-link"
            to={"/updateUserProfile/" + this.props.id}
          ></Link>
        </Button>
                  
        <Button onClick={this.deleteUser} size="sm" variant="danger">
          Delete
        </Button>
      </div>
    );
  }
}
