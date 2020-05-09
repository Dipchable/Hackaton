import React, { PureComponent } from "react";
import Modal from "./Modal";

class AddNewUser extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      allType_employer: [
        "Frontend developer",
        "Backend developer",
        "HR",
        "Administrator",
        "Team Lead",
        "Product manager",
        "Project manager"
      ],
      useModal: false,
      email: "",
      type_employer: ""
    };
  }
  dataChange = e => {
    const data = e.target;
    this.setState({
      [data.name]: data.value
    });
  };

  goModal = () => {
    this.setState({
      useModal: true
    });
  };
  backModal = () => {
    this.setState({
      useModal: false
    });
  };

  render() {
    const modal = (
      <Modal>
        <div className="modal">
          <div className="modal__block">
            <h1>Добавьте нового сотрудника</h1>
            <div className="add__user__input__select">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.dataChange}
              />
              <select name="type_employer" id="">
                <option disabled>Выберите специализацию</option>
                {this.state.allType_employer.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <button onClick={this.backModal} className="button__hover">
              Добавить
            </button>
          </div>
        </div>
      </Modal>
    );
    return (
      <div>
        {this.state.useModal ? modal : null}
        <div>
          <button className="addUser" onClick={this.goModal}>
            Добавить сотрудника
          </button>
        </div>
      </div>
    );
  }
}

export default AddNewUser;
