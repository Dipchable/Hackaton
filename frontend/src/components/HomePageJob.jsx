import React, { PureComponent } from "react";
import Card from "./components/Card";
import Course from "./Course";
import "./HomePageJob.css";
class HomePageJob extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      tasks: [
        {
          title: "Пройти тестирование",
          text:
            "Система формализованных заданий, по результатам выполнения к-рых можно судить об уровне развития определённых качеств испытуемого, а также о его знаниях, умениях и навыках."
        },
        {
          title: "Собеседование с PR",
          text: "После прохождения теста PR назначит вам собеседование в ZOOM"
        },
        {
          title: "Начало работы",
          text:
            "PR предоставит Вам первого клиента, с которым нужно будет поговорить."
        },
        {
          title: "Финальный экзамен",

          text: "Экзамен, чтобы получить аттестацию Ux/Ui дизайнера"
        }
      ]
    };
    this.eventCourse = this.eventCourse.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  eventCourse() {
    this.setState({
      modal: true
    });
  }
  handleHide() {
    this.setState({
      modal: false
    });
  }

  render() {
    const modal = this.state.modal ? (
      <Course handleHide={this.handleHide}></Course>
    ) : null;
    return (
      <div className="UserAccount">
        {modal}
        <div className="allCourse__galery" style={{ marginLeft: "100px" }}>
          {this.state.tasks.map((item, index) => {
            return (
              <Card
                card={item}
                key={index}
                eventCourse={this.eventCourse}
              ></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePageJob;
