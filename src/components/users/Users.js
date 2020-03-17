import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            const users = response.data;
            this.setState({ users });
            console.log('State with data : ' + response);
        });
    };

    render() {
        return (
            <div>
                <li>
                    { this.state.users.map(user => <li>{user.name}</li>) }
                </li>
            </div>
        )
    }
}

export default Users;