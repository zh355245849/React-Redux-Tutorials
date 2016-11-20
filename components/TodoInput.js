/**
 * Created by zh355245849 on 2016/11/19.
 */
import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TodoInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: ''
        }
    }

    deleteLetter() {
        console.log(this.state)
        this.setState({
            inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
        })
    }

    handleChange(e) {
        this.setState({
            inputText: e.target.value
        })
    }

    render() {
        return (<div>
                <form  onSubmit={this.handleSubmit.bind(this)}>
                    <input  type="text"
                            placeholder="Type your todo"
                            value={this.state.inputText}
                            onChange={this.handleChange.bind(this)}></input>
                    <input type="submit" text="submit"></input>
                    </form>
                </div>
                )
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addTodo(this.state.inputText)
    }

}

export default TodoInput