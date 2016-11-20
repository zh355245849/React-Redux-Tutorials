/**
 * Created by zh355245849 on 2016/11/19.
 */
import React, {Component} from 'react'
import actions from '../redux/actions'

class TodoItem extends Component {
    render() {
        return (
                    <li>
                        <div>{this.props.todo.text}</div>
                        <button onClick={this.handleComplete.bind(this)}>completed</button>
                        <button onClick={this.handleDelete.bind(this)}>delete</button>
                    </li>

                )
    }

    handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id)
    }

    handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id)
    }
}

export default TodoItem