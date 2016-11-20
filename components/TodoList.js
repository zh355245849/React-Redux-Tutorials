/**
 * Created by zh355245849 on 2016/11/19.
 */
import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (<ul>
            {
                this.props.todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
                })
            }
        </ul>)
    }
}

export default TodoList