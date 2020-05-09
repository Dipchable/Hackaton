import React, { PureComponent } from "react";
import Modal from "./Modal";

class AddNewUser extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      useModal: false
    };
  }

  goModal = () => {
    console.log("go");

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
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button onClick={this.backModal}>Добавить</button>
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
