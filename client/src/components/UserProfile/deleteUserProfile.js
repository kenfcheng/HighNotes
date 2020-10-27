import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class DeleteUserTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser() {
    axios
      .delete("/api/userprofile" + this.props.obj._id)
      .then((res) => {
        console.log("User deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.ser}</td>
        <td>{this.props.email}</td>
        <td>{this.props.city}</td>
        <td>{this.props.state}</td>
        <td>{this.props.country}</td>
        <td>{this.props.aboutMe}</td>
        <td>{this.props.faveSong}</td>
        <td>
          <Link
            className="edit-link"
            to={"/updateUserProfile/" + this.props.id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteUser} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
