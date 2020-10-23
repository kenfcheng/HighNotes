import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class UserTablerow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.username}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.city}</td>
        <td>{this.props.obj.state}</td>
        <td>{this.props.obj.country}</td>
        <td>{this.props.obj.aboutMe}</td>
        <td>{this.props.obj.faveSong}</td>
        <td>
          <Link className="edit-link" to={"/edit-user/" + this.props.obj._id}>
            Edit
          </Link>
          <Button size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
