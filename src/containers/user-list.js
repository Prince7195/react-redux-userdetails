import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectedUser } from '../actions/index';

class UserList extends React.Component {

    createListItems() {
        return this.props.users.map(
            user => <li 
            onClick={() => this.props.selectedUser(user)}
            key={user.id} > 
            {user.first} {user.last} 
            </li>
        );
    }

    render() {
        return (
            <div>
                <ul>
                    {this.createListItems()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectedUser: selectedUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);