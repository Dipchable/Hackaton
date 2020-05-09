import React, { PureComponent } from "react";

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.goTest = this.goTest.bind(this);
  }

  goTest(e) {
    e.preventDefault();
    this.props.eventCourse();
  }

  render() {
    const { title, text } = this.props.card;
    return (
      <div className="block__card" style={{ marginTop: "430px" }}>
        <div style={{ marginTop: "22px" }}>
          <h2>{title}</h2>
        </div>
        <div style={{ margin: "22px" }}>
          <p>{text}</p>
        </div>
        <div style={{ marginBottom: "15px" }}>
          {" "}
          <a href="" onClick={this.goTest}>
            ➤ Перейти к задаче
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
