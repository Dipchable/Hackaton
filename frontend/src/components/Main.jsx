import React, { PureComponent } from "react";
import Login from "./components/Login";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      authorization: false
    };
    this.authorization = this.authorization.bind(this);
  }

  authorization(email, password) {
    //отправить феч на бэк для проверки данных
    console.log(email, password);

    this.setState({
      authorization: true
    });
    this.props.isLogged(true, email === "admin@gmail.com");
  }

  render() {
    return (
      <div className="main">
        {this.state.authorization ? (
          "Главный компонент"
        ) : (
          <Login authorization={this.authorization} />
        )}
      </div>
    );
  }
}

export default Main;
