import React, { PureComponent } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HomePageJob from "./components/HomePageJob";
import AdminHome from "./adminComponents/adminHome";

import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      email: ""
    };
    this.isLogged = this.isLogged.bind(this);
  }

  isLogged(bool, email) {
    this.setState({
      logged: bool,
      email
    });
  }
  async componentDidMount() {
    const response = await fetch("/visit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    });
    const result = await response.json();
    console.log(result);
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.logged ? (
          this.state.email ? (
            <AdminHome />
          ) : (
            <HomePageJob />
          )
        ) : (
          <Main isLogged={this.isLogged} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
