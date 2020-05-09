import React, { PureComponent } from "react";
import "./Login.css";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.changeData = this.changeData.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  changeData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginUser() {
    this.props.authorization(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="login">
        <div className="form__login">
          <input
            type="email"
            name="email"
            onChange={this.changeData}
            style={{ backgroundColor: "white" }}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={this.changeData}
            style={{ backgroundColor: "white" }}
            placeholder="Password"
          />
          <input
            type="submit"
            value="Войти"
            onClick={this.loginUser}
            style={{
              background: "#FF7478",
              "box-boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "white"
            }}
            className="inputSubmit"
          />
        </div>
      </div>
    );
  }
}

export default Login;
