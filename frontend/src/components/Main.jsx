import React, { PureComponent } from "react";
import Login from "./components/Login";
import { withRouter } from "react-router";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      authorization: false
    };
    this.authorization = this.authorization.bind(this);
  }

  async authorization(email, password) {
    const response = await fetch(`/loging/${email}/${password}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    });
    const result = await response.text();
    console.log(result);
    // console.log();

    if (result === "password correct") {
      this.setState({
        authorization: true
      });
      this.props.isLogged(true, email === "admin@gmail.com");
    } else {
      alert("Не верные данные");
    }
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

export default withRouter(Main);
