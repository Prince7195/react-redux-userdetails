import React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component {
    render() {
        let thumbnail = "";
        let age = "";
        let description = "";
        if (this.props.user.thumbnail) {
            thumbnail = <img src={this.props.user.thumbnail} />
        }
        if (this.props.user.age) {
            age = <h4>Age: {this.props.user.age}</h4>
        }
        if (this.props.user.description) {
            description = <p>Description: {this.props.user.description}</p>
        }
        return (
            <div>
                {thumbnail}
               <h3> {this.props.user.first} {this.props.user.last} </h3>
               {age}
               {description}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);