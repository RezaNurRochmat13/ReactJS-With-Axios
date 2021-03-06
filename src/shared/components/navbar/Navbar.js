import React from 'react';

class Navbar extends React.Component {
    
    render() {
        return (
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">ReactJS Dashboard</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="/user">Users</a>
                    </div>
                </div>
                </nav>
        );
    }
}

export default Navbar;