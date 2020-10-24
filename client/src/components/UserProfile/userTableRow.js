import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class UserTablerow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
        <td>{this.props.city}</td>
        <td>{this.props.state}</td>
        <td>{this.props.country}</td>
        <td>{this.props.aboutMe}</td>
        <td>{this.props.faveSong}</td>
        <td>
          <Link className="edit-link" to={"/edit-user/"}>
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
