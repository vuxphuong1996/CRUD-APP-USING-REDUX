import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom'
import { SetUser, EditUser } from '../Action';
import { connect } from 'react-redux';

export class AddUser extends Component {
  state = {
    redirect: false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const fullname = this.fullname.value
    const address = this.address.value
    const email = this.email.value
    const user = {
      fullname,
      address,
      email
    }
    if (this.props.match.path === "/adduser") {
      this.props.SetUser(user)
    } else {
      const id = this.props.location.state.id
      this.props.EditUser(user, id)
    }
    this.setState({
      redirect: true
    })
    this.fullname.value = ""
    this.address.value = ""
    this.email.value = ""
  }

  render() {
    const { redirect } = this.state
    const values = this.props.location.state ? this.props.location.state : ""
    const inputForm = (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="fullname">First Name</Label>
          <Input type="text" name="fullname" ref={(input) => this.fullname = input} defaultValue={values.fullname} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input type="text" name="address" ref={(input) => this.address = input} defaultValue={values.address} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" ref={(input) => this.email = input} defaultValue={values.email} />
        </FormGroup>
        {
          (this.props.match.path === "/adduser")
          ? (<Button type="submit" outline color="success">Add User</Button>)
          : (<Button type="submit" outline color="primary">Save</Button>)
        }
        <Button type="button" outline color="danger">
          <Link to="/"> Quay lai</Link>
        </Button>
      </Form>
    );

    return (
      <Container>
        {redirect ? (<Redirect to="/" />) : inputForm}
      </Container>
    );
  }
}

export default connect(null, { SetUser, EditUser })(AddUser)
