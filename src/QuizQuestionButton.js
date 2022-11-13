import React, {Component} from 'react'

class QuizQuestionButton extends Component {
	handleClick(){
		this.props.clickHandler(button_text)
	}

	render(){
		return <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
	}
}

export default QuizQuestionButton