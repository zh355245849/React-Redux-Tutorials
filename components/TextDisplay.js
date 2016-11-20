import React, { Component } from 'react'

class TextDisplay extends Component {

    render() {
        return (
            <div>
                <div>I will display text: {this.props.text}</div>
                <button onClick={this.handleClick.bind(this)}>delete one letter</button>
             </div>
             )
    }

    handleClick() {
        console.log(this)
        this.props.deleteLetter()
    }
}

export default TextDisplay