import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import UserTableRow from "./userTableRow";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
  }

  componentDidMount() {
    axios

      .get("/api/userprofile")
      .then((res) => {
        this.setState({
          users: res.data,
        });
        console.log(this.state.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.users ? (
      <UserTableRow
        username={this.state.username}
        email={this.state.email}
        city={this.state.city}
        state={this.state.state}
        country={this.state.country}
        aboutMe={this.state.aboutMe}
        faveSong={this.state.faveSong}
      />
    ) : (
      <tr>Loading...</tr>
    );
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>

              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>About Me</th>
              <th>Favorite Song</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
