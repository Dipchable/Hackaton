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
        "Project manager",
        "Ux/Ui дизайнер"
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
    // const email = JSON.stringify({
    //   email: this.state.email
    // });
    // const type_employer = JSON.stringify({
    //   type_employer: this.state.type_employer
    // });

    fetch(`/register/${this.state.email}/${this.state.type_employer}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    });

    // const result = await response.json();
    // console.log(result);

    this.setState({
      useModal: false
    });
  };

  render() {
    const modal = (
      <Modal>
        <div className="modal">
          <div className="modal__block">
            <h1 style={{ fontStyle: "Arson Pro" }}>
              Добавьте нового сотрудника
            </h1>
            <div className="add__user__input__select">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.dataChange}
              />
              <select name="type_employer" id="" onChange={this.dataChange}>
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
            <button
              onClick={this.backModal}
              className="button__hover"
              style={{ marginBottom: "20px" }}
            >
              Добавить
            </button>
          </div>
        </div>
      </Modal>
    );
    return (
      <div>
        <div className="box_addUser">
          <button className="addUser" onClick={this.goModal}>
            Добавить сотрудника
          </button>
        </div>
        {this.state.useModal ? modal : null}
      </div>
    );
  }
}

export default AddNewUser;
