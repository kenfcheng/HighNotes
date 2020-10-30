import React, { Component } from "react";
import axios from "axios";
// import Table from "react-bootstrap/Table";
import UserTableRow from "./userTableRow";
// import Photo from "../Images/photo";
// import Grid, { Col, Row, Container } from "../Images/grid";
import { Card } from "react-bootstrap";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get("/api/userprofile")
      .then((res) => {
        console.log(res.data.userprofile);
        this.setState({
          user: res.data.userprofile,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    const {
      _id,
      username,
      email,
      city,
      state,
      country,
      aboutMe,
      faveSong,
    } = this.state.user;
    return username ? (
      <UserTableRow
        _id={_id}
        username={username}
        email={email}
        city={city}
        state={state}
        country={country}
        aboutMe={aboutMe}
        faveSong={faveSong}
      />
    ) : (
      <div>Loading...</div>
    );
  }

  render() {
    return (
      <Card>
        <br></br>
        <br></br>
        {this.DataTable()}
             
      </Card>
    );
  }
}
