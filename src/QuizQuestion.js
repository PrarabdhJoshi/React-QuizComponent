import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestion();
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, key) => {
                return (
                  <QuizQuestionButton
                    key={key}
                    button_text={answer_option}
                    clickHandler={this.clickHandler}
                  />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
