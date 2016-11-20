/**
 * Created by zh355245849 on 2016/11/20.
 */
import React, {Component} from 'react'
import actions from '../redux/actions'

class UserInfo extends Component {
    render() {
        return (
            <li>
                <div>username: {this.props.user.username}</div>
                <div>id: {this.props.user.id} </div>
                <button onClick={this.handleNewId.bind(this)}>Update with random Id</button>
                <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if Odd</button>
            </li>
        )
    }

    handleNewId() {
        this.props.actions.createNewUserId()
    }

    handleNewIdIfOdd() {
        this.props.actions.createNewUserIdIfOdd()
    }
}

export default UserInfo