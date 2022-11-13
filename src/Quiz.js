import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
	constructor(props) {
		super(props)
		this.state = {quiz_position: 1}
	}
	showNextQuestion(){
		// KYC, ah, https://reactjs.org/docs/state-and-lifecycle.html
		// there is a reason why this is the correct way to update state
		// if there is a possibility the update may be async, you
		// should use this and NOT the one below
		this.setState((state) => {return {quiz_position: state.quiz_position+1}})
		//this.setState({quiz_position: this.state.quiz_position+1})
	}

	render(){
		const isQuizEnd = (this.state.quiz_position-1 === quizData.quiz_questions.length)
		return ( 						
		<div>
			{isQuizEnd ? <QuizEnd /> : <QuizQuestion 
				quiz_question = {quizData.quiz_questions[this.state.quiz_position-1]} 
				showNextQuestionHandler = {this.showNextQuestion.bind(this)}
				/>}
		</div>					
		)
	}
}

export default Quiz

/*

if (isQuizEnd) {
			return (
				<div>
					<QuizEnd />
				</div>	
			)	
		} else {
			return (
				<div>
					<QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position-1]} />
				</div>
			)
		}

*/