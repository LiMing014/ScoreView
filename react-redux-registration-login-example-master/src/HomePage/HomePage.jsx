import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import NavBar from '../_components/NavBar';
import Profile from '../_components/Profile';
import { Container, Row, Col } from 'react-grid-system';
import { Table } from 'reactstrap';
import './Homepage.css'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <Container>
                <div id="wholebody">
                    <Row>
                        <Col id="ver-nav-bar" sm={4}>
                            <Row>
                                <Profile />
                            </Row>
                            <Row>
                                <div className="navBar">
                                    <NavBar />
                                </div>                                
                            </Row>
                        </Col>
                        <Col sm={8}>
                            <div className="col-md-8">
                                <h1>Hi {user.firstName}!</h1>
                               
                                

                                <h3>All registered users:</h3>
                                {users.loading && <em>Loading users...</em>}
                                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                                {users.items &&
                                    <Table borderless>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.items.map((user, index) =>
                                                <tr key={user.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{user.firstName + ' ' + user.lastName}</td>
                                                    {
                                                        user.deleting ? <em> - Deleting...</em>
                                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                        : <td><a onClick={this.handleDeleteUser(user.id)}>Delete</a></td>
                                                    }
                                                </tr>
                                            )}
                                        </tbody>                                        
                                    </Table>                                                                            
                                }
                                <p>
                                    <Link to="/login">Logout</Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
               
            </Container>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };