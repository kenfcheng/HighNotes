import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import UserTableRow from "./userTableRow";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios

      .get("/api")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.users.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
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