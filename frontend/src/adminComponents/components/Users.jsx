import React, { PureComponent } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import "./Users.css";
class Users extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { name: "Роман Трубицын", proffesion: "Ux/Ui, дизайнер" },
        { name: "Сергей Крайницкий", proffesion: "Frontend разработчик" },
        { name: "Иван Хмельницкий", proffesion: "Backend разработчик" },
        { name: "Мария Олешкова", proffesion: "Ux/Ui, дизайнер" }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.users.map((item, index) => {
          return (
            <div key={index} className="string__users">
              <p style={{ fontSize: "50px", marginRight: "0px" }}>🔰</p>
              <div>
                <h3>{item.name}</h3>
                <p>{item.proffesion}</p>
              </div>
              <h3>100%</h3>
              <h3>Пройти тестирование</h3>
              <h3>1 из 5</h3>
              <button
                style={{
                  width: "150px",
                  background: "#d12e26",
                  color: "white"
                }}
                onClick={() => this.props.goUser()}
              >
                Просмотреть
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Users);
