import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({users: response.data});
        })
        .catch(err => {
            console.error(err); 
        })
    }

    render() {
        return (
            <div className="user-content">
                <div className="container">
                    <div className="card">
                        <div className="card-header">List Users</div>
                        <div class="card-body">
                            <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.map((user, index) => 
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className="btn btn-primary">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;