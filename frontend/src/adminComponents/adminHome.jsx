import React, { PureComponent } from "react";
import "./adminHome.css";
import AddNewUser from "./components/addNewUser";

class AdminHome extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      stager: ["Миша", "Рома", "Нестор", "Дима"],
      action: ["Добавить задачу", "Узнать статистику", "Отсортировать"]
    };
  }

  render() {
    return (
      <div className="admin__home__block">
        <div>
          <AddNewUser></AddNewUser>
        </div>
        <div className="select__value">
          <select style={{ marginTop: "600px" }}>
            <option disabled>Выбрать сотрудника</option>
            <option>Выбрать сотрудника</option>

            {this.state.stager.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          <select style={{ marginTop: "600px" }}>
            <option disabled>Выбрать действие</option>
            <option>Выбрать действие</option>

            {this.state.action.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default AdminHome;
