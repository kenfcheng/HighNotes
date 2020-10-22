import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserCity = this.onChangeUserCity.bind(this);
    this.onChangeUserState = this.onChangeUserState.bind(this);
    this.onChangeUserCountry = this.onChangeUserCountry.bind(this);
    this.onChangeUserAboutMe = this.onChangeUserAboutMe.bind(this);
    this.onChangeUserFaveSong = this.onChangeUserFaveSong.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: "",
      email: "",
      city: "",
      state: "",
      country: "",
      aboutMe: "",
      faveSong: "",
    };
  }

  componentDidMount() {
    axios
      .get("mongodb://localhost/KaraokeBuddydb" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          city: res.data.city,
          state: res.data.state,
          country: res.data.state,
          aboutMe: res.data.aboutMe,
          faveSong: res.data.faveSong,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ city: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ state: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ country: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ aboutMe: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ faveSong: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      username: this.state.username,
      email: this.state.email,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      aboutMe: this.state.aboutMe,
      faveSong: this.state.faveSong,
    };

    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        userObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("User updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/userProfile");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Username">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.username}
              onChange={this.onChangeUserUsername}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeUserEmail}
            />
          </Form.Group>

          <Form.Group controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={this.state.city}
              onChange={this.onChangeUserCity}
            />
          </Form.Group>

          <Form.Group controlId="State">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              value={this.state.state}
              onChange={this.onChangeUserState}
            />
          </Form.Group>

          <Form.Group controlId="Country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              value={this.state.country}
              onChange={this.onChangeUserCountry}
            />
          </Form.Group>

          <Form.Group controlId="AboutMe">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              type="text"
              value={this.state.aboutMe}
              onChange={this.onChangeUserAboutMe}
            />
          </Form.Group>

          <Form.Group controlId="faveSong">
            <Form.Label>Favorite Song</Form.Label>
            <Form.Control
              type="text"
              value={this.state.faveSong}
              onChange={this.onChangeUserFaveSong}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update User
          </Button>
        </Form>
      </div>
    );
  }
}
