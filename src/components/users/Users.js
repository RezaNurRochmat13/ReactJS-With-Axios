import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: [],
        name: ''
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            const users = response.data;
            this.setState({ users });
            console.log('State with data : ' + response);
        });
    };

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    handleSubmitRequest = event => {
        event.preventDefault();
        
        const userPayload = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, userPayload)
        .then(res => {
            console.log(res);
            console.log(res.data);
            alert('Success Insert : ' + res.data )
        })
        .catch(err => {
            console.error(err); 
        })
    }

    render() {
        return (
            <div className="user-content">
                <ul>
                    { this.state.users.map(user => <li>{user.name}</li>) }
                </ul>

                {/* Form add users example */}
                <form onSubmit={this.handleSubmitRequest}>
                    <label>Person name</label>
                    <input type="text" name="name" onChange={this.handleChange} /> <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Users;