import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { DeleteUser } from '../Action'
import { Link } from 'react-router-dom'

export class User extends Component {
  render() {
    const { DeleteUser, todos } = this.props
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.map((todo, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{todo.fullname}</td>
              <td>{todo.email}</td>
              <td>{todo.address}</td>
              <td>
                <Button color="primary" outline>
                  <Link to={{ pathname: `/edituser/${todo.id}`, state: { ...todo } }}>Edit</Link>
                </Button></td>
              <td><Button color="danger" onClick={() => DeleteUser(todo.id)}>X</Button></td>
            </tr>
          )
          )}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProp = (state) => ({
  todos: state.data
})

// const mapDispatchToProp = (dispatch) => ({
//   deleteUser: (id) => dispatch(DeleteUser(id))
// })

export default connect(mapStateToProp, { DeleteUser })(User)
