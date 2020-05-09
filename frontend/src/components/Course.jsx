import React, { PureComponent } from "react";
import Modal from "./components/Modal";

class Course extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: [{ text: "", answer: 0 }],
      index: 0,
      theEnd: false
    };
  }

  checkAnswers(boolean) {
    const newArr = [...this.state.question];
    const end = this.state.question.length - 2 === this.state.index;
    newArr[this.state.index].answer = boolean ? 1 : 0;
    this.setState({
      question: newArr,
      index: this.state.index + 1,
      theEnd: end
    });
  }
  async componentDidMount() {
    this.setState({
      question: this.props.question.question
    });
  }

  render() {
    const element = this.state.question[this.state.index];
    const buttons = this.state.theEnd ? (
      <button onClick={this.props.handleHide} className="button__hover">
        Hide
      </button>
    ) : (
      <div className="modal__buttons">
        {" "}
        <button
          onClick={() => this.checkAnswers(true)}
          style={{ minWidth: "120px", margin: "20px" }}
          className="button__hover"
        >
          Да
        </button>
        <button
          onClick={() => this.checkAnswers(false)}
          style={{ minWidth: "120px", margin: "20px" }}
          className="button__hover"
        >
          Нет
        </button>
      </div>
    );
    const modal = (
      <Modal>
        <div className="modal">
          <div className="modal__block" style={{ padding: "70px" }}>
            {this.state.theEnd ? (
              <>
                <h1 style={{ marginTop: "90px" }}>
                  Поздравляем! Вы допущены к работе!
                </h1>
                <p style={{ fontSize: "70px" }}>🎉</p>
                <button
                  onClick={this.props.handleHide}
                  style={{ marginBottom: "20px" }}
                  className="button__hover"
                >
                  Вернуться к работе!
                </button>
              </>
            ) : (
              <>
                {" "}
                <h3>Онлайн-тестирование сотрудников на проф. пригодность</h3>
                <h1>{element.text}</h1>
                <h3>Отвечайте на вопросы честно!</h3>
                {buttons}
              </>
            )}
          </div>
        </div>
      </Modal>
    );
    return <div>{modal}</div>;
  }
}

export default Course;
